const { verifyToken } = require("../utils/jwt");
const { User } = require("../models");
const { errorResponse } = require("../utils/response");
const redis = require("../utils/redis");
module.exports = async (req, res, next) => {
    try {
        const checkToken = req.get("Authorization");
        if (!checkToken) {
            throw new Error("Unauthorized");
        }
        const token = req.get("Authorization").replace("Bearer ", "");
        if (token) {
            await redis.connect();
            if (await redis.getData("blacklist-" + token)) {
                throw new Error("Unauthorized");
            }
            await redis.disconnect();
        }

        const { id } = verifyToken(token);

        const user = await User.findOne({
            where: {
                id,
            },
        });

        if (!user) {
            return errorResponse(res, undefined, 403, "Tài khoản đã bị xóa");
        }
        req.user = user;
        req.accessToken = token;
        return next();
    } catch (e) {
        return errorResponse(res, undefined, "Unauthorized", 401);
    }
};
