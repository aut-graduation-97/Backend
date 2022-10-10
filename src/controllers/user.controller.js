const {getAll} = require('../db/queries/user/read');
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
    }
};
