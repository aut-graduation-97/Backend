const {getAll} = require('../db/queries/user/read');
module.exports = {
    getAllUsers(req, res) {
        res.json({
            'message': 'لیست تمام کاربران با موفقیت دریافت شد',
            'users': getAll(),
        });
    }
};
