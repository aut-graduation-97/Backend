const tweetRoutes = require('./tweet-routes');

module.exports = (app) => {
    tweetRoutes(app);
}
