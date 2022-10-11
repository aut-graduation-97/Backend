const userService = require('../services/user.service');
const authMiddleware = require('../middlewares/authentication.middleware');
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
    },

    getTweetsOfUser(req, res) {
        //check if user is logged in
        new authMiddleware(req, res).getUser();

        const studentId = req.params.id;
        
        userService.getTweetsByStudentId(studentId)
            .then(tweets => {
                logger.info(`Get list of all tweets by student id ${studentId} successfully`);
                res.status(200).json({
                    message: 'لیست توییت ها با موفقیت دریافت شد',
                    tweets
                });
            })
            .catch(err => {
                logger.error(err);

                res.status(500).json({
                    message: 'دریافت توییت های کاربر با خطا مواجه شد لطفا دوباره تلاش کنید'
                });
            });

    }
};
