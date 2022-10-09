const Tweet = require('../../models/tweets');
const User = require('../../models/users');

/**
 * Likes a tweet
 * @param {string} tweetId - The ID of the tweet to like.
 * @param {string} userId - The ID of the user who is liking the tweet.
 * @return {promise} A promise that resolves with the Tweet that matches the id
 */
module.exports = (tweetId, userId) => {
    return Tweet.findByIdAndUpdate(tweetId, {
        $push: {likes: userId}
    });
};
