const isAuthenticated = false;
const AuthMiddleware = (req, res, next) => {
    if (!isAuthenticated) {
        return res.redirect('/login');
    }
    next();
}
module.exports = AuthMiddleware