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
    },

    getTweetsOfUser(req, res) {
        //check if user is logged in
        new authMiddleware(req, res).getUser();

        const studentId = req.params.id;

        userService.getTweetsByStudentId(studentId)
            .then(tweets => {
                console.log(`Get list of all tweets by student id ${studentId} successfully`);
                res.status(200).json({
                    message: 'لیست توییت ها با موفقیت دریافت شد',
                    tweets
                });
            })
            .catch(err => {
                console.error(err);

                res.status(500).json({
                    message: 'دریافت توییت های کاربر با خطا مواجه شد لطفا دوباره تلاش کنید'
                });
            });

    },

    updateUserData(req, res) {
        const auth = new authMiddleware(req, res).getUser();
        const studentId = req.params.id;

        // check for a user updating someones else data
        if (auth.id !== studentId) {
            res.status(401).json({
                message: 'شما دسترسی به اپدیت کردن اطلاعات بقیه ی کاربران ندارید.'
            });
        }


        const newUserData = {
            name: req.body.name,
            studentId: req.body.student_id,
            password: req.body.password,
            github: req.body.github,
            spotify: req.body.spotify,
            email: req.body.email,
            phone: req.body.phone,
            telegram: req.body.telegram,
            twitter: req.body.twitter,
            instagram: req.body.instagram,
            linkedin: req.body.linkedin,
            bio: req.body.bio,
            avatar: req.body.avatar
        };

        userService.updateUserData(studentId, newUserData).then(user => {
            console.log(`User #${user.id} has been updated`);
            res.status(200).json({
                message: 'اطلاعات کاربر با موفقیت اپدیت شد.',
                user
            });
        });
    }
};
