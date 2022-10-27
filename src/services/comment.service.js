const {readAllComments} = require('../db/queries/comment/read');
module.exports = {
    async getCommentsOnUserByStudentId(studentId) {
        return readAllComments(studentId);
    },
};
