const usersController = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/users', usersController.getAllUsers);
    app.get('/users/:id/tweets', usersController.getTweetsOfUser);
    app.put('/users/:id', usersController.updateUserData);
};
