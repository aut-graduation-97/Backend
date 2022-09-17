const assert = require('assert');
const request = require('supertest');
const app = require('../../app');

const mongoose = require('mongoose');
const {response} = require("express");
const Tweet = mongoose.model('tweet');
const User = require('../../src/db/models/user');

describe('Tweets controller', () => {
    it('GET to /tweets gets all tweets', (done) => {
        request(app)
            .get('/tweets')
            .end((err, response) => {
                assert(response.body.length === 0);
                done();
            });
    });

    it('GET to /tweets/:id gets a single tweet', (done) => {
        const user = new User({
            name: 'Alexander',
            studentId: '111111',
            password: '123456',
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
                request(app)
                    .get(`/tweets/${tweet._id}`)
                    .end((err, response) => {
                        assert(response.body.text.toString() === 'This is a test tweet.');
                        done();
                    });
            });
    });

    it('POST to /tweets creates a new tweet', (done) => {
        const user = new User({
            name: 'Alexander',
            studentId: '111111',
            password: '123456'
        });

        const tweetProps = {
            userId: user._id.toString(),
            likes: [
                user._id.toString(),
            ],
            text: 'This is a test tweet.',
            images: [
                'url1',
                'url2'
            ],
        };

        user.save()
            .then(() => Tweet.count())
            .then(count => {
                request(app)
                    .post('/tweets')
                    .send(tweetProps)
                    .end(() => {
                        Tweet.count()
                            .then(newCount => {
                                assert(count + 1 === newCount);
                                done();
                            });
                    });
            });
    });

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
