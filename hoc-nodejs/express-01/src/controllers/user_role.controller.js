const { User, Role } = require("../models");
const { successResponse, errorResponse } = require("../utils/response");
module.exports = {
    roles: async (req, res) => {
        const { id } = req.params;
        const user = await User.findOne({
            where: { id },
            include: [
                {
                    model: Role,
                    as: "roles",
                    through: {
                        attributes: [],
                    },
                },
            ],
        });

        // Trả về danh sách các roles của 1 user
        return successResponse(res, user.roles, 200, "Xóa thành công");
    },
    update: async (req, res) => {
        // Cập nhật role cho user
        try {
            const { id } = req.params;
            const { roles } = req.body;
            if (!Array.isArray(roles)) {
                throw new Error("Vui lòng thêm roles");
            }
            const user = await User.findOne({
                where: { id },
                include: [
                    {
                        model: Role,
                        as: "roles",
                    },
                ],
            });
            if (!user) {
                throw new Error("User không tồn tại");
            }
            await user.setRoles(roles);
            return successResponse(res, undefined, 200, "Cập nhật thành công");
        } catch (err) {
            return errorResponse(res, undefined, err.message, 400);
        }
    },
    destroy: async (req, res) => {
        // Xóa role của 1 user
        const { id } = req.params;
        const user = await User.findByPk(id);
        user.setRoles([]);
        return successResponse(res, undefined, 200, "Xóa thành công");
    },
};
//Controller này sẽ giải quyết bài toán trả về role tương ứng của 1 user và các thao tác với nó
