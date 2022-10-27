const usersController = require('../controllers/user.controller');
const userCommentsController = require('../controllers/comment.controller');

module.exports = (app) => {
    app.get('/users', usersController.getAllUsers);
    app.get('/users/:id/tweets', usersController.getTweetsOfUser);

    app.get('/users/:id/comments', userCommentsController.getUserComments);
    app.post('/users/:id/comments', userCommentsController.createCommentForUser);
};
