const Tweet = require('../../models/tweets');

/**
 * Gets a single tweet from the Tweets collection
 * @param {string} _id - The ID of the tweet to get.
 * @return {promise} A promise that resolves with the Tweet that matches the id
 */
module.exports = (_id) => {
    return Tweet.findById(_id);
};
