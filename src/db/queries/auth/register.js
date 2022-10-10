const User = require('../../models/user');

module.exports = (userProps, password) => {
    const user = new User({
        name: userProps.name,
        studentId: userProps.student_id,
        email: userProps.email,
        password
    }).save();
    
    return user
}