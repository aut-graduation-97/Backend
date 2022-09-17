const getAllTweets = require('../db/queries/tweets/get-all-tweets');
const getTweetById = require('../db/queries/tweets/get-tweet-by-id');
const createTweet = require('../db/queries/tweets/create-tweet');
const deleteTweet = require('../db/queries/tweets/delete-tweet');

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
