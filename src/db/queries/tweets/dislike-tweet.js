const Tweet = require('../../models/tweets');

/**
 * Dislikes a tweet
 * @param {string} tweetId - The ID of the tweet to dislike.
 * @param {string} userId - The ID of the user who is disliking the tweet.
 * @return {promise} A promise that resolves with the Tweet that matches the id
 */
module.exports = (tweetId, userId) => {
    return Tweet.findByIdAndUpdate(tweetId, {
        $pull: {likes: userId}
    });
};
