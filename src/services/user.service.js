const {getAll, getUserByStudentId} = require('../db/queries/user/read');
const {updateUserWithStudentId} = require('../db/queries/user/update');
const {getTweetsByUserId} = require('../db/queries/tweets/read');
const {updateUserData} = require('../controllers/user.controller');

module.exports = {
    async getAllUsers() {
        return await getAll();
    },

    async getTweetsByStudentId(studentId) {
        const user = await getUserByStudentId(studentId);
        return getTweetsByUserId(user._id);
    },

    async updateUserData(targetStudentId, newUserData) {
        return updateUserWithStudentId(targetStudentId, newUserData);
    }
};
