const Tweet = require('../../models/tweets');

/**
 * Gets all tweets from the Tweets collection
 * @return {promise} A promise that resolves with all the tweets
 */
module.exports = () => {
    return Tweet.find({});
};
