const tweetsService = require('../services/tweets.service');
const authentication = require('../middlewares/authentication.middleware');

const invalidIdMsg = 'argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer';
const someThingWentWrongMsg = 'something went wrong';
const tweetNotFoundMsg = 'tweet not found';

module.exports = {
    getAllTweets(req, res) {
        tweetsService.getAllTweetsService()
            .then(tweets => {
                res.send(tweets);
            })
            .catch(err => {
                console.log(err);
                res.status(422).json({
                    message: someThingWentWrongMsg
                });
            });
    },

    getTweetById(req, res) {
        const id = req.params.id;

        tweetsService.getTweetByIdService(id)
            .then(tweet => {
                if (tweet) {
                    res.send(tweet);
                } else {
                    res.status(404).json({
                        message: tweetNotFoundMsg
                    });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: invalidIdMsg
                });
            });
    },

    createTweet(req, res) {
        const tweetProps = req.body;

        tweetsService.createTweetService(tweetProps)
            .then(tweet => {
                if (tweet) {
                    res.send(tweet);
                } else {
                    res.status(422).json({
                        message: someThingWentWrongMsg
                    });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(422).json({
                    message: someThingWentWrongMsg
                });
            });
    },

    deleteTweet(req, res) {
        const id = req.params.id;

        tweetsService.deleteTweetService(id)
            .then((tweet) => {
                if (tweet) {
                    res.send(tweet);
                } else {
                    res.status(404).json({
                        message: tweetNotFoundMsg
                    });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: invalidIdMsg
                });
            });
    },

    likeTweet(req, res) {
        const tweetId = req.params.tweetId;
        // const userId = new authentication(req, res).getUser().user_id;
        const userId = req.body.userId;

        tweetsService.likeTweetService(tweetId, userId)
            .then(tweet => {
                if (tweet) {
                    res.send(tweet);
                } else {
                    res.status(404).json({
                        message: tweetNotFoundMsg
                    });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: invalidIdMsg
                });
            });
    },

    dislikeTweet(req, res) {
        const tweetId = req.params.tweetId;
        // const userId = new authentication(req, res).getUser().user_id;
        const userId = req.body.userId;

        tweetsService.dislikeTweetService(tweetId, userId)
            .then(tweet => {
                if (tweet) {
                    res.send(tweet);
                } else {
                    res.status(404).json({
                        message: tweetNotFoundMsg
                    });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: invalidIdMsg
                });
            });
    },
};
