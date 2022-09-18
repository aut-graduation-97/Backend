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
                    message: 'argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer'
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
                    message: 'argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer'
                });
            });
    },
};
