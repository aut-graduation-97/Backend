const User = require('../../models/user');

module.exports = {

    findUser(studentId){
        return User.findOne({studentId})
    },

    changePassword(studentId, password){
        return User.findOneAndUpdate({studentId}, {$set: {password}})
    }
}