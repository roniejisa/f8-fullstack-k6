"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Role.belongsToMany(models.User, {
                through: "user_role",
                otherKey: "user_id",
                foreignKey: "role_id",
                as: "users",
            });

            Role.belongsToMany(models.Permission, {
                through: "role_permission",
                otherKey: "permission_id",
                foreignKey: "role_id",
                as: "permissions",
            });
        }
    }
    Role.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Role",
            tableName: "roles",
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return Role;
};
