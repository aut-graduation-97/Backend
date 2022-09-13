const assert = require('assert');
const User = require('../../../db/models/user');

describe('Updating records', () => {
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

    it('update user name', (done) => {
        User.updateOne({name: 'Joe'}, {name: 'Alex'})
            .then(() => User.find({}))
            .then((users) => {
                assert(users[0].name === 'Alex');
                assert(users[0].studentId.toString() === '123456');
                done();
            });
    });
});
