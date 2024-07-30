const { User } = require("../models");
module.exports = {
    loginForm: (req, res) => {
        if (req.session.user) {
            return res.redirect("/");
        }
        const error = req.flash("error");
        return res.render("auth/login", { error: Array.isArray(error) && error.length ? error[0] : null });
    },
    login: async (req, res) => {
        if (req.body.email === "" || req.body.password === "") {
            req.flash("error", "Thieu thong tin dang nhap");
            return res.redirect("/login");
        }
        const user = await User.findOne({
            where: {
                email: req.body.email,
                password: req.body.password,
            },
        });
        if (user) {
            req.session.user = user;
        } else {
            req.flash("error", "Thong tin dang nhap khong dung");
            return res.redirect("/login");
        }
        return res.redirect("/");
    },
    logout: async (req, res) => {
        req.session.user = null;
        return res.redirect("/login");
    },
};
