const getAllTweets = require('../../db/queries/tweets/get-all-tweets');
const getTweetById = require('../../db/queries/tweets/get-tweet-by-id');
const createTweet = require('../../db/queries/tweets/create-tweet');
const deleteTweet = require('../../db/queries/tweets/delete-tweet');

module.exports = {
    getAllTweets(req, res) {
        getAllTweets()
            .then(tweets => {
                res.send(tweets);
            });
    },

    getTweetById(req, res) {
        const id = req.params.id;

        getTweetById(id)
            .then(tweet => {
                res.send(tweet);
            });
    },

    createTweet(req, res) {
        const tweetProps = req.body;

        createTweet(tweetProps)
            .then(tweet => {
                res.send(tweet);
            });
    },

    deleteTweet(req, res) {
        const id = req.params.id;

        deleteTweet(id)
            .then(tweet => {
                res.send(tweet);
            });
    },
};
