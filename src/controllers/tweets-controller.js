const tweetsService = require('../db/tweets.bootstrap');

module.exports = {
    getAllTweets(req, res) {
        tweetsService.getAllTweetsService()
            .then(tweets => {
                res.send(tweets);
            })
            .catch(err => {
                console.log(err);
                res.send('Something went wrong');
            });
    },

    getTweetById(req, res) {
        const id = req.params.id;

        tweetsService.getTweetByIdService(id)
            .then(tweet => {
                res.send(tweet);
            });
    },

    createTweet(req, res) {
        const tweetProps = req.body;

        tweetsService.createTweetService(tweetProps)
            .then(tweet => {
                res.send(tweet);
            });
    },

    deleteTweet(req, res) {
        const id = req.params.id;

        tweetsService.deleteTweetService(id)
            .then(() => {
                res.send({id});
            });
    },
};
