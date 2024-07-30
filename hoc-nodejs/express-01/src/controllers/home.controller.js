module.exports = {
    index: async (req, res, next) => {
        const user = req.session.user;
        if (!user) {
            req.flash("error", "Vui long dang nhap");
            return res.redirect("/login");
        }
        res.render("home/index", {
            user,
        });
    },
};
