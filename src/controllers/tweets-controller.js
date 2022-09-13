const GetAllTweets = require('../../db/queries/tweets/get-all-tweets');
const GetTweetById = require('../../db/queries/tweets/get-tweet-by-id');
const CreateTweet = require('../../db/queries/tweets/create-tweet');
const DeleteTweet = require('../../db/queries/tweets/delete-tweet');

module.exports = {
    getAllTweets(req, res) {
        GetAllTweets()
            .then(tweets => {
                res.send(tweets);
            });
    },

    getTweetById(req, res) {
        const id = req.params.id;

        GetTweetById(id)
            .then(tweet => {
                res.send(tweet);
            });
    },

    createTweet(req, res) {
        const tweetProps = req.body;

        CreateTweet(tweetProps)
            .then(tweet => {
                res.send(tweet);
            });
    },

    deleteTweet(req, res) {
        const id = req.params.id;

        DeleteTweet(id)
            .then(tweet => {
                res.send(tweet);
            });
    },
};
