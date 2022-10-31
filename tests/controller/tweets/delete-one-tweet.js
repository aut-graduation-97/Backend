const assert = require('assert');
const request = require('supertest');
const app = require('../../../app');

const mongoose = require('mongoose');
const Tweet = mongoose.model('tweet');
const User = require('../../../src/db/models/user');

describe('Tweets controller', () => {
    it('DELETE to /tweets/:id can delete a tweet', done => {
        const user = new User({
            name: 'Alexander',
            studentId: '111111',
            password: '123456'
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
            .then(() => tweet.save())
            .then(() => Tweet.count())
            .then(count => {
                request(app)
                    .delete(`/tweets/${tweet._id}`)
                    .send({
                        userId: user._id.toString(),
                    })
                    .end(() => {
                        Tweet.count()
                            .then(newCount => {
                                assert(count - 1 === newCount);
                                done();
                            });
                    });
            });
    });
});
