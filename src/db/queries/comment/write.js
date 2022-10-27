const user = require('../../models/user');
module.exports = {
    createComment(studentId, comment) {
        return user.findOne({studentId}, {
            $push: {comment}
        });

    }
};
