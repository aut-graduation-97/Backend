const {getAll} = require('../db/queries/user/read');
const authMiddleware = require('../middlewares/authentication.middleware');

module.exports = {
    getAllUsers(req, res) {
        new authMiddleware(req, res).getUser();
        
        res.json({
            'message': 'لیست تمام کاربران با موفقیت دریافت شد',
            'users': getAll(),
        });
    }
};
