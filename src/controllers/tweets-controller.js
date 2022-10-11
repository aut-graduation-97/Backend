const tweetsService = require('../services/tweets.service');
// const authentication = require('../middlewares/authentication.middleware');

const invalidIdMessage = 'argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer';

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
                if (tweet) {
                    res.send(tweet);
                } else {
                    res.status(404).json({
                        message: 'tweet not found'
                    });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: invalidIdMessage
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
                        message: 'something went wrong'
                    });
                }
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
            .then((tweet) => {
                if (tweet) {
                    res.send(tweet);
                } else {
                    res.status(404).json({
                        message: 'tweet not found'
                    });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: invalidIdMessage
                });
            });
    },

    likeDislikeTweet(req, res) {
        const tweetId = req.params.tweetId;
        // const userId = new authentication(req, res).getUser().user_id;
        // just for ease of testing, to be removed later
        const userId = req.body.userId;
        const kind = req.body.kind;

        if (kind === 'like') {
            tweetsService.likeTweetService(tweetId, userId)
                .then(tweet => {
                    if (tweet) {
                        res.send(tweet);
                    } else {
                        res.status(404).json({
                            message: 'tweet not found'
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).json({
                        message: invalidIdMessage
                    });
                });
        } else if (kind === 'dislike') {
            tweetsService.dislikeTweetService(tweetId, userId)
                .then(tweet => {
                    if (tweet) {
                        res.send(tweet);
                    } else {
                        res.status(404).json({
                            message: 'tweet not found'
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).json({
                        message: invalidIdMessage
                    });
                });
        }
    },
};
