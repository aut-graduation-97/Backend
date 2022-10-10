const User = require('../../models/user');

module.exports = {
    getAll() {
        return User.find();
    },

    getById(id) {
        return User.findById(id);
    }
};
