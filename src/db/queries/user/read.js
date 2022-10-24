const User = require('../../models/user');

module.exports = {
    getAll() {
        return User.find({}, ['name', 'studentId', 'avatar']);
    },

    getUserByStudentId(studentId) {
        return User.findOne({studentId});
    }
};
