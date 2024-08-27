const { successResponse, errorResponse } = require("../utils/response");
const { Role, Permission } = require("../models");
module.exports = {
    create: async (req, res) => {
        // try {
        const { name, permissions } = req.body;
        if (!name) {
            return errorResponse(res, {}, "Vui lòng cung cấp tên role", 400);
        }

        const role = await Role.create({
            name,
        });

        if (Array.isArray(permissions)) {
            const permissionData = await Promise.all(
                permissions.map(async (value) => {
                    const [permission] = await Permission.findOrCreate({
                        where: {
                            value,
                        },
                        defaults: {
                            value,
                        },
                    });
                    return permission;
                })
            );
            await role.setPermissions(permissionData);
        }

        return successResponse(res, role, 201, "Tạo role thành công");
        // } catch (e) {
        //     return errorResponse(res, {}, "Vui lòng cung cấp tên role", 400);
        // }
    },
    index: async (req, res) => {
        const roles = await Role.findAll({
            include: [
                {
                    model: Permission,
                    as: "permissions",
                },
            ],
        });
        return successResponse(res, roles, 200, "Success");
    },
    findOne: async (req, res) => {
        const { id } = req.param;
        const role = await Role.findByPk(id, {
            include: [
                {
                    model: Permission,
                    as: "permissions",
                },
            ],
        });
        return successResponse(res, role, 200, "Success");
    },
    update: async (req, res) => {
        const { id } = req.params;
        const { name, permissions } = req.body;
        if (!name) {
            return errorResponse(res, {}, "Vui lòng cung cấp tên role", 400);
        }

        const role = await Role.findByPk(id);

        if (!role) {
            return errorResponse(res, {}, "Role không tồn tại", 400);
        }

        if (name) {
            await role.update({
                name: name,
            });
        }

        if (Array.isArray(permissions)) {
            const permissionData = await Promise.all(
                permissions.map(async (value) => {
                    const [permission] = await Permission.findOrCreate({
                        where: {
                            value,
                        },
                        defaults: {
                            value,
                        },
                    });
                    return permission;
                })
            );

            await role.setPermissions(permissionData);
        }
        return successResponse(res, role, 201, "Tạo role thành công");
        // } catch (e) {
        //     return errorResponse(res, {}, "Vui lòng cung cấp tên role", 400);
        // }
    },
    destroy: async (req, res) => {
        const { id } = req.params;
        try {
            const role = await Role.findByPk(id);
            if (!role) {
                throw new Error("Không tồn tại Role");
            }
            await role.setPermissions([]);
            await Role.destroy({
                where: {
                    id,
                },
            });

            return successResponse(res, undefined, 200, "Xóa thành công!");
        } catch (err) {
            return errorResponse(res, undefined, err.message, 400);
        }
    },
};
