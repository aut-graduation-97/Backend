const getAllTweets = require('./queries/tweets/get-all-tweets');
const getTweetById = require('./queries/tweets/get-tweet-by-id');
const createTweet = require('./queries/tweets/create-tweet');
const deleteTweet = require('./queries/tweets/delete-tweet');

module.exports = {
    getAllTweetsService() {
        return getAllTweets()
    },

    getTweetByIdService(id) {
        console.log(id);
        return getTweetById(id);
    },

    createTweetService(tweetProps) {
        return createTweet(tweetProps);
    },

    deleteTweetService(id) {
        return deleteTweet(id);
    }
}
