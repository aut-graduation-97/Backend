const commentService = require('../services/comment.service');

module.exports = {
    getUserComments(req, res) {
        const studentId = req.params.id;

        commentService.getCommentsOnUserByStudentId(studentId)
            .then(comments => {
                res.status(200).json({
                    message: 'لیست نظرات با موفقیت دریافت شد.',
                    comments
                });
            }).catch(err => {
            console.error('something went wrong with fetching comments on user: ' + err);
            res.status(501).json({
                message: 'در دریافت لیست کاربران مشکلی پیش امد؛ لطفا دوباره تلاش بفرمایید.'
            });
        });
    },

    createComment() {

    }
};
