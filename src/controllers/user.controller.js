const authMiddleware = require('../middlewares/authentication.middleware');
const userService = require('../services/user.service');

module.exports = {
    getAllUsers(req, res) {
        userService.getAllUsers()
            .then(users => {
                console.log('user list has been fetched successfully');
                
                res.status(200).json({
                    message: 'لیست کاربران با موفقیت دریافت شد',
                    users
                });
            })
            .catch(error => {
                console.error(error);

                res.status(500).json({
                    message: 'مشکلی در دریافت لیست کاربران وجود دارد لطفا دوباره تلاش کنید'
                });
            });
    }
};
