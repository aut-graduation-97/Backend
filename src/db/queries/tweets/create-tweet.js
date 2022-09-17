const Tweet = require('../../models/tweets');

/**
 * Creates a single tweet in the artist collection.
 * @param {object} tweetProps - Object containing a userId, likes, text, and images
 * @return {promise} A promise that resolves with the Tweet that was created
 */
module.exports = (tweetProps) => {
    const tweet = new Tweet(tweetProps);

    return tweet.save();
}
