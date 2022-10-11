const Tweet = require('../../models/tweets');
module.exports = {
    async getTweetsByUserId(id) {
        return Tweet.find({userId: id});
    }
};
