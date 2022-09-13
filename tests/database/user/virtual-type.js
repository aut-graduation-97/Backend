const assert = require('assert');
const User = require('../../../src/models/user');
const Tweet = require('../../../src/models/tweets');

describe('Virtual Types', () => {
    it('likesCount returns number of likes', (done) => {
        const user = new User({
            name: 'Alexander',
            studentId: '111111',
            password: '123456',
        });

        const tweet = new Tweet({
            userId: user._id,
            likes: [
                user._id,
            ],
            text: 'This is a test tweet.',
            images: [
                'url1',
                'url2'
            ],
        });

        Promise.all([user.save(), tweet.save()])
            .then(() => Tweet.findOne({userId: user._id}))
            .then((tweet) => {
                assert(tweet.likesCount === 1);
                done();
            })
    });
});
