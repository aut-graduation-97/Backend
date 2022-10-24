const Tweet = require('../../models/tweets');

/**
 * Deletes a single tweet from the Tweets collection
 * @param {string} tweetId - The ID of the tweet to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */
module.exports = (tweetId, userId) => {
    return Tweet.deleteOne({_id: tweetId, userId});
};
