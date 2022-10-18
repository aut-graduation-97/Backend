const Tweet = require('../../models/tweets');

/**
 * Likes a tweet (if user id is not already in likes array
 * @param {string} tweetId - The ID of the tweet to like.
 * @param {string} userId - The ID of the user who is liking the tweet.
 * @return {promise} A promise that resolves with the Tweet that matches the id
 */
module.exports = (tweetId, userId) => {
    return Tweet.update(
        {_id: tweetId, likes: {$ne: userId}},
        {$push: {likes: userId}}
    );
};
