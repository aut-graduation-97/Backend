const register = require('../db/queries/auth/register');
const login = require('../db/queries/auth/login');
const {findUser, changePassword} = require('../db/queries/auth/forgot-password');

module.exports = {
    registerUser(info, password){
        return register(info, password) 
    },

    loginUser(info){
        return login(info.student_id)
    },

    async forgot_password(student_id, password){
        let user = await findUser(student_id)
        if(user){
            return changePassword(student_id, password)
        }else{
            return user
        }
    }
}