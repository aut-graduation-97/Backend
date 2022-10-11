const {getAll} = require('../db/queries/user/read');
module.exports = {
    async getAllUsers() {
        return await getAll();
    }
};
