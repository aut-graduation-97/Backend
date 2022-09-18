const tweetRoutes = require('./tweet-routes');

module.exports = (app) => {
    // define your routes here
    tweetRoutes(app);
}
