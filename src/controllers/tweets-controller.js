const tweetsService = require('../services/tweets.service');

module.exports = {
    getAllTweets(req, res) {
        tweetsService.getAllTweetsService()
            .then(tweets => {
                res.send(tweets);
            })
            .catch(err => {
                console.log(err);
                res.status(422).json({
                    message: 'something went wrong'
                });
            });
    },

    getTweetById(req, res) {
        const id = req.params.id;

        tweetsService.getTweetByIdService(id)
            .then(tweet => {
                res.send(tweet);
            })
            .catch(err => {
                console.log(err);
                res.status(404).json({
                    message: 'tweet not found'
                });
            });
    },

    createTweet(req, res) {
        const tweetProps = req.body;

        tweetsService.createTweetService(tweetProps)
            .then(tweet => {
                res.send(tweet);
            })
            .catch(err => {
                console.log(err);
                res.status(422).json({
                    message: 'something went wrong'
                });
            });
    },

    deleteTweet(req, res) {
        const id = req.params.id;

        tweetsService.deleteTweetService(id)
            .then(() => {
                res.send({id});
            })
            .catch(err => {
                console.log(err);
                res.status(422).json({
                    message: 'something went wrong'
                });
            });
    },
};
