const user = require('../../models/user');
module.exports = {
    readAllComments(studentId) {
        return user.findOne({studentId}).comments;
    }
};
