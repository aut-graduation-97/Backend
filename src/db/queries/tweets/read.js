const Tweet = require('../../models/tweets');
module.exports = {
    async getTweetsByUserId(id) {
        Tweet.find({userId: id});
    }
};
