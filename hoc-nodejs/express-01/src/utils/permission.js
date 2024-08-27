const { User, Role, Permission } = require("../models");

module.exports = async (userId) => {
    const user = await User.findByPk(userId, {
        include: [
            {
                model: Role,
                as: "roles",
                include: [
                    {
                        model: Permission,
                        as: "permissions",
                    },
                ],
            },
        ],
    });
    const permissions = user.roles.reduce((initial, role) => {
        const permissionsString = role.permissions.map((permission) => permission.value);
        return [...new Set([...initial, ...permissionsString])];
    }, []);

    return permissions;
};
