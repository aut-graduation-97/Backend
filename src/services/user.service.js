const {getAll, getUserByStudentId} = require('../db/queries/user/read');
const {getTweetsByUserId} = require('../db/queries/tweets/read');
module.exports = {
    async getAllUsers() {
        return await getAll();
    },

    async getTweetsByStudentId(studentId) {
        const user = await getUserByStudentId(studentId);
        return getTweetsByUserId(user._id);
    }
};
