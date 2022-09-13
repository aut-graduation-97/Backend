const assert = require('assert');
const User = require('../../src/models/user');

describe('Reading users out of the database', () => {
    let user;

    beforeEach((done) => {
        user = new User({
            name: 'Joe',
            studentId: '123456',
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

        user.save()
            .then(() => {
                done();
            });

    });

    it('find a user with a particular id', (done) => {
        User.findOne({
            _id: user._id
        }).then((user) => {
            assert(user.name === 'Joe');
            done();
        });
    });
});
