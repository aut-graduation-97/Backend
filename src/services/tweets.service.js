const getAllTweets = require('../db/queries/tweets/get-all-tweets');
const getTweetById = require('../db/queries/tweets/get-tweet-by-id');
const createTweet = require('../db/queries/tweets/create-tweet');
const deleteTweet = require('../db/queries/tweets/delete-tweet');
const likeTweet = require('../db/queries/tweets/like-tweet');
const dislikeTweet = require('../db/queries/tweets/dislike-tweet');

module.exports = {
    getAllTweetsService() {
        return getAllTweets()
    },

    getTweetByIdService(id) {
        return getTweetById(id);
    },

    createTweetService(tweetProps) {
        return createTweet(tweetProps);
    },

    deleteTweetService(id) {
        return deleteTweet(id);
    },

    likeTweetService(tweetId, userId) {
        return likeTweet(tweetId, userId);
    },

    dislikeTweetService(tweetId, userId) {
        return dislikeTweet(tweetId, userId);
    },
}
