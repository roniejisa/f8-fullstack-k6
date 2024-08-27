const { successResponse, errorResponse } = require("../utils/response");
const { Permission } = require("../models");
module.exports = {
    create: async (req, res) => {
        try {
            const { name } = req.body;

            if (!name) {
                return errorResponse(res, {}, "Vui lòng cung cấp tên permission", 400);
            }
            const role = await Permission.create({
                name,
            });

            return successResponse(res, role, 201, "Tạo permission thành công");
        } catch (e) {
            return errorResponse(res, {}, "Vui lòng cung cấp tên role", 400);
        }
    },
};
