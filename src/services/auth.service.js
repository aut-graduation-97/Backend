const register = require('../db/queries/auth/register');
const login = require('../db/queries/auth/login');

module.exports = {
    registerUser(info, password){
        return register(info, password) 
    },

    loginUser(info){
        return login(info.student_id)
    },
}