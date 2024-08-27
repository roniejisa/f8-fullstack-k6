const permission = require("../utils/permission");
const { errorResponse } = require("../utils/response");
module.exports = (value) => {
    return async (req, res, next) => {
        const userId = req.user.id;
        const permissions = await permission(userId);
        console.log(permissions);
        if (!permissions.includes(value)) {
            return errorResponse(res, undefined, "Bạn không có quyền truy cập", 400);
        }
        next();
    };
};
