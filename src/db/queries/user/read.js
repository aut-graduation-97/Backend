const User = require('../../models/user');

module.exports = {
    getAll() {
        return User.find({}, ['name', 'studentId', 'avatar']);
    },

    getById(id) {
        return User.findById(id);
    }
};
