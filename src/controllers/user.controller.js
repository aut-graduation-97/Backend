const {getAll} = require('../db/queries/user/read');
module.exports = {
    getAllUsers(req, res) {
        res.json(getAll());
    }
};
