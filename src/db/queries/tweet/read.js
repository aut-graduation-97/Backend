const Tweet = require('../../models/tweets');
module.exports = {
    getTweetsByUserId(id) {
        return Tweet.find({userId: id});
    }
};
