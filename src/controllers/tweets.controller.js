const tweetsService = require('../services/tweets.service');
const authentication = require('../middlewares/authentication.middleware');

const tweetCreatedMsg = 'توییت با موفقیت ایجاد شد';
const tweetDeletedMsg = 'توییت با موفقیت حذف شد';

const invalidIdMsg = 'آرگومان وارد شده باید یک رشته از 12 بایت یا یک رشته از 24 کاراکتر هگزا داشته باشد یا یک عدد باشد';
const someThingWentWrongMsg = 'مشکلی پیش آمده است، لطفا دوباره امتحان کنید';
const tweetNotFoundMsg = 'توییت یافت نشد';

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
        const userId = new authentication(req, res).getUser().user_id;

        tweetProps.userId = userId;

        tweetsService.createTweetService(tweetProps)
            .then(tweet => {
                if (tweet) {
                    res.json({
                        message: tweetCreatedMsg
                    });
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
        const tweetId = req.params.id;
        const userId = new authentication(req, res).getUser().user_id;

        tweetsService.deleteTweetService(tweetId, userId)
            .then((operationResult) => {
                if (operationResult.deletedCount == 1) {
                    res.json({
                        message: tweetDeletedMsg
                    });
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
        const userId = new authentication(req, res).getUser().user_id;

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
        const userId = new authentication(req, res).getUser().user_id;

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
