const bcrypt = require("bcrypt");
module.exports = {
    make: (data) => {
        const salt = bcrypt.genSaltSync(12);
        return bcrypt.hashSync(data, salt);
    },
    verify: (password, hash) => {
        return bcrypt.compareSync(password, hash);
    },
};
