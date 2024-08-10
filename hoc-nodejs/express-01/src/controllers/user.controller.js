const { User, Phone, Post } = require("../models");
module.exports = {
    index: async (req, res, next) => {
        const users = await User.findAll({
            include: [
                { model: Phone, as: "phones" },
                { model: Post, as: "posts" },
            ],
        });
        return res.json(users);
    },
    findByPost: async (req, res, next) => {
        const { id } = req.params;
        const post = await Post.findByPk(id);
        const user = await post.getUser();
        res.json({
            post,
            user,
        });
    },
    createPost: async (req, res) => {
        const { id } = req.params;
        const user = await User.findByPk(id);
        const post = await user.createPost({
            title: "Post 7",
        });
        res.json({
            user,
            post,
        });
    },
    getDetail: async (req, res, next) => {
        // try {
        //     const { id } = req.params;
        //     const users = await userModel.getUser(id);
        //     if (!users.length) {
        //         return res.json({
        //             error: "Không có dữ liệu!",
        //         });
        //     }
        //     return res.json({ user: users[0] });
        // } catch (error) {
        //     next(error);
        // }
    },
    create: async (req, res, next) => {
        // try {
        let user = await User.create(req.body);
        if (user && req.body.phone) {
            const phone = await Phone.create({
                user_id: user.id,
                value: req.body.phone,
            });
            user = JSON.parse(JSON.stringify(user));
            user.phone = phone;
        }
        return res.json(user);
        // } catch (err) {
        //     next(err);
        // }
    },
    update: async (req, res, next) => {
        const { id } = req.params;
        // try {
        const user = await User.update(
            {
                where: {
                    id,
                },
            },
            body
        );
        return res.json(user);
        // } catch (err) {
        //     next(err);
        // }
    },
    delete: async (req, res, next) => {
        // const { id } = req.params;
        // try {
        const user = await User.destroy(id);
        return res.json(user);
        // } catch (err) {
        //     next(err);
        // }
    },
    findByPhone: async (req, res) => {
        const { phone } = req.query;
        const phoneInstance = await Phone.findOne({
            where: {
                value: phone,
            },
        });
        const user = await phoneInstance.getUser();
        res.json(user);
    },
    posts: async (req, res) => {
        const { id } = req.params;
        const user = await User.findByPk(id);
        const posts = await user.getPosts();
        return res.json({
            user,
            posts,
        });
    },
};
