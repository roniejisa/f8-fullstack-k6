const { User, Session } = require("../models");
var jwt = require("jsonwebtoken");
const { verify } = require("../utils/hash");
const { errorResponse, successResponse } = require("../utils/response");
const { signIn, verifyToken, createRefreshToken, verifyRefreshToken } = require("../utils/jwt");
const redis = require("../utils/redis");
const permission = require("../utils/permission");
module.exports = {
    login: async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return errorResponse(res, undefined, "Vui lòng điền email và password", 403);
        }
        const user = await User.findOne({
            where: {
                email,
            },
        });
        // Kiểm tra email có tồn tại không
        if (!user) {
            return errorResponse(res, undefined, "Tài khoản không tồn tại", 401);
        }

        const check = verify(password, user.password);
        if (!check) {
            return errorResponse(res, undefined, "Tài khoản không tồn tại", 401);
        }
        var accessToken = signIn({ id: user.id, fullname: user.fullname });
        var refreshToken = createRefreshToken(user.id);

        const tokenList = {
            refreshToken,
        };
        await redis.connect();
        await redis.setData(`refreshToken-${refreshToken}`, JSON.stringify(tokenList), 86400);
        await redis.disconnect();
        var ip = req.get("x-forwarded-for") || req.socket.remoteAddress || null;
        return successResponse(
            res,
            {
                accessToken,
                refreshToken,
            },
            200,
            "Đăng nhập thành công!"
        );
    },
    logout: async (req, res) => {
        const { accessToken } = req;
        await redis.connect();
        await redis.setData(`blacklist-${accessToken}`, accessToken, 3000);
        await redis.disconnect();
        console.log("ok");
    },
    profile: async (req, res) => {
        const user = req.user;
        const userId = user.id;
        const permissions = await permission(userId);
        user.setDataValue("permissions", permissions);
        return successResponse(res, user, 200, "Success");
    },
    refreshToken: async (req, res) => {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            return errorResponse(res, undefined, "Vui lòng cung cấp refresh token", 401);
        }

        await redis.connect();
        if (!(await redis.getData(`refreshToken-${refreshToken}`))) {
            return errorResponse(res, undefined, "Vui lòng cung cấp refresh token", 401);
        }
        // try {
        const { userId } = verifyRefreshToken(refreshToken);
        const user = await User.findByPk(userId);
        // Kiểm tra email có tồn tại không
        if (!user) {
            return errorResponse(res, undefined, "Tài khoản không tồn tại", 401);
        }

        var accessToken = signIn({ id: user.id, fullname: user.fullname });
        var newRefreshToken = createRefreshToken(user.id);

        const tokenList = {
            refreshToken: newRefreshToken,
        };
        await redis.connect();
        await redis.setData(`refreshToken-${newRefreshToken}`, JSON.stringify(tokenList), 86400);
        await redis.disconnect();
        var ip = req.get("x-forwarded-for") || req.socket.remoteAddress || null;
        return successResponse(
            res,
            {
                accessToken,
                refreshToken: newRefreshToken,
            },
            200,
            "Refresh token success!"
        );
        // } catch (e) {
        //     console.log(1);
        //     return errorResponse(res, undefined, "Vui lòng cung cấp refresh token", 401);
        // }
    },
    revokeToken: async (req, res) => {
        const { refreshToken } = req.body;
        await redis.connect();
        await redis.deleteData(`refreshToken-${refreshToken}`);
        await redis.disconnect();
        return successResponse(res, undefined, 200, "ok");
    },
};
