const User = require('../../models/user');

module.exports = {
    getAll() {
        return User.find({}, ['name', 'studentId', 'avatar']);
    },

    async getUserByStudentId(studentId) {
        return User.findOne({studentId});
    }
};
