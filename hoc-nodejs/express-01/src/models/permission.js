"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Permission extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Permission.belongsToMany(models.User, {
                through: "user_permission",
                otherKey: "user_id",
                foreignKey: "permission_id",
                as: "users",
            });

            Permission.belongsToMany(models.Role, {
                through: "role_permission",
                otherKey: "role_id",
                foreignKey: "permission_id",
                as: "roles",
            });
        }
    }
    Permission.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            value: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Permission",
            tableName: "permissions",
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return Permission;
};
