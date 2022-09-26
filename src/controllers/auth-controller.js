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
                    console.log("email " + user.email + "pass " + password);
                    // this.sendEmail(info.email, password)
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
    
};