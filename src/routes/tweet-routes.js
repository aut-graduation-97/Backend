const TweetController = require('../controllers/tweets-controller');

module.exports = (app) => {
    app.get('/tweets', TweetController.getAllTweets);
    app.get('/tweets/:id', TweetController.getTweetById);
    app.post('/tweets', TweetController.createTweet);
    app.delete('/tweets/:id', TweetController.deleteTweet);

    app.get('/', (req, res) => {
        res.send({hi: 'there'});
    });
};
