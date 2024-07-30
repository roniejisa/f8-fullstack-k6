"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            fullname: DataTypes.STRING,
            password: DataTypes.STRING,
            fullname: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "User",
            tableName: "users",
            createdAt: "created_at",
            updatedAt: "updated_at",
            // timestamps: false -- Nếu không muốn có created_at và updated_at thì chuyển thành false
        }
    );
    return User;
};
