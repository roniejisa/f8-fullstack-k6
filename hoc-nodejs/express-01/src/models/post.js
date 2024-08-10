"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Post.belongsTo(models.User, {
                foreignKey: "user_id",
                as: "user",
            });
            Post.belongsToMany(models.Category, {
                through: "post_category",
                foreignKey: "post_id",
                otherKey: "category_id",
                as: "categories",
            });
        }
    }
    Post.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Post",
            tableName: "posts",
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return Post;
};
