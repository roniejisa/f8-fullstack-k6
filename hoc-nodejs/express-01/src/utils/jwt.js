const jwt = require("jsonwebtoken");
module.exports = {
    signIn: (data) => {
        return jwt.sign(data, process.env.TWT_TOKEN, {
            expiresIn: process.env.JWT_EXPIRE,
        });
    },
    verifyToken: (token) => {
        return jwt.verify(token, process.env.TWT_TOKEN, {
            expiresIn: "1h",
        });
    },
    createRefreshToken: (userId) => {
        return jwt.sign(
            {
                userId,
                secret: `${Math.random()}${new Date().getTime}`,
            },
            process.env.JWT_REFRESH_TOKEN,
            {
                expiresIn: "7d",
            }
        );
    },
    verifyRefreshToken: (token) => {
        return jwt.verify(token, process.env.JWT_REFRESH_TOKEN);
    },
};
