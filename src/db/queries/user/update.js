const User = require('../../models/user');

module.exports = {
    updateUserWithStudentId(studentId, newUserData) {
        return User.updateOne({studentId}, {$set: newUserData});
    }
};
