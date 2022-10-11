const {getAll} = require('../db/queries/user/read');
module.exports = {
    getAllUsers() {
        return getAll();
    }
};
