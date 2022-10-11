const User = require('../../models/user');

module.exports = {
    async getAll() {
        return User.find({}).select({
            _id: 1,
            name: 1,
            student_id: 1,
            avatar: 1
        });
    },

    async getUserByStudentId(studentId) {
        return User.findOne({studentId});
    }
};
