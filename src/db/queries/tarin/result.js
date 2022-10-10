const User = require('../../models/user');

module.exports = {
    async findStudents(tarinId){
        return await User.find({'tarin.property': `${tarinId}`})
    },
}