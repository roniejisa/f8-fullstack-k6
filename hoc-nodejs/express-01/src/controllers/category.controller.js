const { Category, Post } = require("../models");
module.exports = {
    index: async (req, res) => {
        const category = await Category.findAll({
            include: [
                {
                    model: Post,
                    as: "posts",
                    through: {
                        attributes: [],
                    },
                    attributes: ["id", "title"],
                },
            ],
        });
        res.json({ category });
    },

    find: async (req, res) => {
        const { id } = req.params;
        const category = await Category.findOne({
            where: {
                id,
            },
            include: [
                {
                    model: Post,
                    as: "posts",
                    through: {
                        attributes: [],
                    },
                    attributes: ["id", "title"],
                },
            ],
        });
        res.json({ category });
    },

    findByPost: async (req, res) => {
        const { id } = req.params;
        const post = await Post.findByPk(id, {
            include: [
                {
                    model: Category,
                    as: "categories",
                    through: {
                        attributes: [],
                    },
                    attributes: ["id", "name"],
                },
            ],
        });
        res.json({ post });
    },

    createPost: async (req, res) => {
        const { id } = req.params;
        const body = req.body;
        const category = await Category.findByPk(id);
        const post = await category.createPost({
            ...body,
            user_id: 1,
        });
        res.json(post);
    },
    createPosts: async (req, res) => {
        const { id } = req.params;
        const body = req.body;
        const category = await Category.findByPk(id);
        const posts = await Promise.all(
            body.map((data) => {
                return category.createPost(data);
            })
        );
        const post = await category.addPosts(posts);
        category.setDataValue("posts", posts);
        res.json(category);
    },

    setPosts: async (req, res) => {
        const body = req.body;
        const { id } = req.params;
        // res.json({ body, id });
        const category = await Category.findByPk(id);
        // const posts = await Promise.all(body.map((id) => Post.findByPk(id)));
        // console.log(posts);
        await category.setPosts(body);
        res.json(category);
    },
    deletePost: async (req, res) => {
        const { id } = req.params;
        const post = await Post.findByPk(id);
        await post.setCategories([]);
        post.destroy();
        res.json(id);
    },
};
