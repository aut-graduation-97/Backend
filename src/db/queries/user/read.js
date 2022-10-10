const User = require('../../models/user');

module.exports = {
    async getAll() {
        return User.find();
    },

    getById(id) {
        return User.findById(id);
    }
};
