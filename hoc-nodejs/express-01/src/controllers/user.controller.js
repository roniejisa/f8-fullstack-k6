module.exports = {
    index: async (req, res, next) => {
        // try {
        //     const users = await userModel.getUsers();
        //     res.json({ users });
        // } catch (error) {
        //     next(error);
        // }
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
        //     const user = await userModel.createUser(req.body);
        //     return res.json(user);
        // } catch (err) {
        //     next(err);
        // }
    },
    update: async (req, res, next) => {
        // const { id } = req.params;
        // try {
        //     const user = await userModel.updateUser(req.body, id);
        //     return res.json(user);
        // } catch (err) {
        //     next(err);
        // }
    },
    delete: async (req, res, next) => {
        // const { id } = req.params;
        // try {
        //     const user = await userModel.delete(id);
        //     return res.json(user);
        // } catch (err) {
        //     next(err);
        // }
    },
};
