const User = require('../../models/user');

module.exports = (studentId) => {
    return User.findOne({studentId})
}