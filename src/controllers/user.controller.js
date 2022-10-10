const {getAll, getIdByStudentId} = require('../db/queries/user/read');
const {getTweetsByUserId} = require('../db/queries/tweets/read');
const authMiddleware = require('../middlewares/authentication.middleware');

module.exports = {
    getAllUsers(req, res) {
        const auth = new authMiddleware(req, res);

        if (auth.checkToken()) {
            res.json({
                'message': 'لیست تمام کاربران با موفقیت دریافت شد',
                'users': getAll(),
            });
        }
    },
    getTweetsOfUser(req, res) {
        //check if user is logged in
        new authMiddleware(req, res).getUser();
        
        const studentId = req.params.id;
        const targetUserId = getIdByStudentId(studentId).select({id: 1});
        const tweets = getTweetsByUserId(targetUserId);

        return res.json({
            message: 'لیست توییت های کاربر با موفیقت دریافت شد',
            tweets
        });
    }
};
