const assert = require('assert');
const User = require('../../src/models/user');

describe('Deleting a user', () => {
    beforeEach((done) => {
        const user = new User({
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

    it('removing a user', (done) => {
        User.findOneAndRemove({name: 'Joe'})
            .then(() => User.findOne({name: 'Joe'}))
            .then((user) => {
                assert(user === null);
                done();
            });
    });
});
