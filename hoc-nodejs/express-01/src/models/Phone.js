"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Phone extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Phone.belongsTo(models.User, {
                foreignKey: "user_id",
                as: "user",
            });
        }
    }
    Phone.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: DataTypes.STRING,
            value: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Phone",
            tableName: "phones",
            createdAt: "created_at",
            updatedAt: "updated_at",
            // timestamps: false -- Nếu không muốn có created_at và updated_at thì chuyển thành false
        }
    );
    return Phone;
};
