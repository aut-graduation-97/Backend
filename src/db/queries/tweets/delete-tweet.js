const Tweet = require('../../models/tweets');

/**
 * Deletes a single tweet from the Tweets collection
 * @param {string} _id - The ID of the tweet to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */
module.exports = (_id) => {
    return Tweet.findByIdAndRemove(_id);
};
