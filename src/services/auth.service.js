const register = require('../db/queries/auth/register');

module.exports = {
    registerUser(info, password){
        return register(info, password) 
    },
}