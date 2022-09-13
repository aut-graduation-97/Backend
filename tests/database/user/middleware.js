const mongoose = require('mongoose');
const assert = require('assert');

const User = require('../../../src/models/user');
const Tweet = require('../../../src/models/tweets');

describe('Middleware (remove all of user tweets, after its deletion)', () => {
    let joe, tweet1, tweet2;

    beforeEach((done) => {
        joe = new User({
            name: 'Joe',
            studentId: '123456',
            password: '123456',
        });
        tweet1 = new Tweet({
            userId: joe._id,
            text: 'tweet1',
            likes: [
                joe._id,
            ],
        });

        tweet2 = new Tweet({
            userId: joe._id,
            text: 'tweet2',
            likes: [
                joe._id,
            ],
        });

        Promise.all([joe.save(), tweet1.save(), tweet2.save()])
            .then(() => done());
    });

    it('users clean up dangling tweets on delete', (done) => {
        joe.remove()
            .then(() => Tweet.count())
            .then((count) => {
                console.log(count);
                assert(count === 0);
                done();
            });
    });
});
