const authService = require('../services/auth.service');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {

    async register(req, res){
        let info = req.body
        let password = Math.random().toString(36).slice(-8)

        authService.registerUser(info, password)
            .then(user => { 
                if(user){
                    return res.json({
                        message: '.کاربر با موفقیت ذخیره شد'
                    })
                }else{
                    return res.status(422).json({
                        message: 'مشکلی در ثبت رخ داد، لطفا دوباره امتحان کنید'
                    });
                }
            })
            .catch(err => {
                console.log(err);
                return res.status(422).json({
                    message: 'کاربر با این شماره دانشجویی در سیستم وجود دارد'
                });
            });
    },
    
    login(req, res){
        let info = req.body

        authService.loginUser(info)
            .then(user => {
                if(user==null){
                    return res.status(404).json({
                        message: 'کاربری با این شماره دانشجویی وجود ندارد'
                    })
                }
                if(user){
                    bcrypt.compare(info.password, user.password, (err, status) => {
                        if(!status) {
                            return res.status(422).json({
                                message: 'رمز عبور نادرست است'
                            })
                        }
                        console.log(user);
                        return res.json({
                            data: {
                                token : jwt.sign({
                                    student_id: user.studentId,
                                    super_user: user.studentId == '9731054' ? true : false,
                                    name : user.name,
                                    user_id: user._id,
                                    avatar: user.avatar != null ? user.avatar : null,
                                }, process.env.SECRET_KEY, {algorithm: "HS256", expiresIn: "1h"})
        
                            },
                            message: "با موفقیت وارد شدید"
                        })
                    })
                }else{
                    return res.status(401).json({
                        message: 'رمز عبور یا شماره دانشجویی نادرست است'
                    });
                }
            })
            .catch(err => {
                console.log(err);
                return res.status(422).json({
                    message: 'مشکلی در ورود رخ داد، لطفا دوباره امتحان کنید'
                });
            });
    },

    forgot_password(req, res){
        let student_id = req.body.student_id
        let password = Math.random().toString(36).slice(-8)



        authService.forgot_password(student_id, password)
            .then(user => { 
                if(user){
                    return res.json({
                        message: 'رمز عبور جدید به ایمیل شما ارسال شد'
                    })
                }else{
                    return res.status(404).json({
                        message: 'کاربر با این شماره دانشجویی در سیستم وجود ندارد'
                    });
                }
            })
            .catch(err => {
                console.log(err);
                return res.status(422).json({
                    message: 'مشکلی در بررسی رخ داد، لطفا دوباره امتحان کنید'
                });
            });

    }
};