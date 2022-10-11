const tweetRoutes = require('./tweet-routes');
const authRoutes = require('./auth-routes');
const tarinRoutes = require('./tarin-routes');


module.exports = (app) => {
    // define your routes here
    tweetRoutes(app);
    authRoutes(app);
    tarinRoutes(app);
};
