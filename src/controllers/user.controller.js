const authMiddleware = require('../middlewares/authentication.middleware');
const userService = require('../services/user.service');
const logger = require('../middlewares/logger.middelware');

module.exports = {
    getAllUsers(req, res) {
        new authMiddleware(req, res).getUser();
        userService.getAllUsers()
            .then(users => {
                logger.info('list of users fetched successfully with status code 200');

                res.status(200).json({
                    message: 'لیست کاربران با موفقیت دریافت شد',
                    users
                });
            })
            .catch(error => {
                logger.error(error);
                res.status(500).json({
                    message: 'مشکلی در دریافت لیست کاربران وجود دارد لطفا دوباره تلاش کنید'
                });
            });
    }
};
