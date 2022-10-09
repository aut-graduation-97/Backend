const assert = require('assert');
const request = require('supertest');
const app = require('../../../app');

const mongoose = require('mongoose');
const Tweet = mongoose.model('tweet');
const User = require('../../../src/db/models/user');

describe('Tweets controller', () => {
    it('POST to /tweets/:id/like can like a tweet', done => {
        const user = new User({
            name: 'Alexander',
            studentId: '111111',
            password: '123456'
        });
        const tweet = new Tweet({
            userId: user._id.toString(),
            likes: [],
            text: 'This is a test tweet.',
            images: [
                'url1',
                'url2'
            ],
        });

        user.save()
            .then(() => tweet.save())
            .then(() => {
                request(app)
                    .post(`/tweets/${tweet._id}/like`)
                    .end(() => {
                        Tweet.findOne({_id: tweet._id})
                            .then(tweet => {
                                assert(tweet.likes.length === 2);
                                done();
                            });
                    });
            });
    });
});
