const assert = require('assert');
const Tweet = require('../../../src/models/tweets');
const User = require('../../../src/models/user');

describe('Delete a tweet', () => {
    let user;
    let tweet;

    beforeEach((done) => {
        user = new User({
            name: 'Alexander',
            studentId: '111111',
            password: '123456',
            github: 'https://www.github.com/',
            spotify: 'https://www.spotify.com/',
            email: 'test@test.com',
            phone: '123456789',
            telegram: 'https://www.telegram.com/',
            twitter: 'https://www.twitter.com/',
            instagram: 'https://www.instagram.com/',
            linkedin: 'https://www.linkedin.com/',
            bio: 'This is a test bio',
            avatar: 'https://www.avatar.com/',
            comments: [
                {
                    content: 'This is a test comment',
                }
            ],
        });
        
        tweet = new Tweet({
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

        user.save()
            .then(() =>
                tweet.save()
            )
            .then(() => {
                done();
            });
    });

    it('removes a tweet', (done) => {
        Tweet.findOneAndRemove({_id: tweet._id.toString()})
            .then(() => Tweet.findOne({_id: tweet._id.toString()}))
            .then((tweet) => {
                assert(tweet === null);
                done();
            });
    });
});
