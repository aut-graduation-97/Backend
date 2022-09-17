const assert = require('assert');
const Tweet = require('../../../src/db/models/tweets');
const User = require('../../../src/db/models/user');

describe('Creating records', () => {
    it('saves a tweet', (done) => {
        const user = new User({
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
        const tweet = new Tweet({
            userId: user._id.toString(),
            likes: [
                user._id.toString(),
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
                assert(!tweet.isNew);
                done();
            });
    });
});
