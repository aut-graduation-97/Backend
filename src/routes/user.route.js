const usersController = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/users', usersController.getAllUsers);
};
