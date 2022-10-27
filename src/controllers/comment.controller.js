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

    createCommentForUser(req, res) {
        const studentId = req.params.id;

        const comment = {
            text: req.body.text,
            date: Date.now()
        };

        commentService.createCommentOnUser(studentId, comment)
            .then(() => {
                res.status(201).json({
                    message: 'نظر شما با موفقیت ذخیره شد.'
                });
            })
            .catch(err => {
                console.error(err);
                res.status(501).json({
                    message: 'مشکلی در ذخیره‌ی نظر شما پیش امد لطفا دوباره تلاش کنید.'
                });
            });
    }
};
