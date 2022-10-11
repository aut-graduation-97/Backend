const {getAll} = require('../db/queries/user/read');
const authMiddleware = require('../middlewares/authentication.middleware');

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
