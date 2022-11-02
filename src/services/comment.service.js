const {readAllComments} = require('../db/queries/comment/read');
const {createComment} = require('../db/queries/comment/write');
module.exports = {
    async getCommentsOnUserByStudentId(studentId) {
        return readAllComments(studentId);
    },

    async createCommentOnUser(studentId, comment) {
        return createComment(comment, studentId);
    }
};
