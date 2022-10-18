const Tweet = require('../../models/tweets');

/**
 * Dislikes a tweet, if user id is in likes array
 * @param {string} tweetId - The ID of the tweet to dislike.
 * @param {string} userId - The ID of the user who is disliking the tweet.
 * @return {promise} A promise that resolves with the Tweet that matches the id
 */
module.exports = (tweetId, userId) => {
    return Tweet.updateOne(
        {_id: tweetId, likes: userId},
        {$pull: {likes: userId}}
    );
};
