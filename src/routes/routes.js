const tweetRoutes = require('./tweet-routes');
const authRoutes = require('./auth-routes');
const tarinRoutes = require('./tarin-routes');
const userRoutes = require('./user.route');

module.exports = (app) => {
    tweetRoutes(app);
    authRoutes(app);
    tarinRoutes(app);
    userRoutes(app);
};
