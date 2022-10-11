const assert = require('assert');
const request = require('supertest');
const app = require('../../../app');

const mongoose = require('mongoose');
const Tweet = mongoose.model('tweet');
const User = require('../../../src/db/models/user');

describe('Tweets controller', () => {
    it('POST to /tweets/:id with kind=like can like a tweet', done => {
        const tweetCreator = new User({
            name: 'Tweet Creator',
            studentId: '111111',
            password: '123456'
        });

        const tweetLiker = new User({
            name: 'Tweet Liker',
            studentId: '222222',
            password: '123456'
        });

        const tweet = new Tweet({
            userId: tweetCreator._id.toString(),
            likes: [],
            text: 'This is a test tweet.',
            images: [
                'url1',
                'url2'
            ],
        });

        const likeProps = {
            userId: tweetLiker._id.toString(),
            kind: 'like'
        };

        Promise.all([tweetCreator.save(), tweetLiker.save(), tweet.save()])
            .then(() => {
                request(app)
                    .post(`/tweets/${tweet._id.toString()}`)
                    .send(likeProps)
                    .end((response) => {
                        Tweet.findOne({_id: tweet._id})
                            .then(tweet => {
                                assert(tweet.likes.length === 1);
                                done();
                            });
                    });
            });
    });

    it('POST to /tweets/:id with kind=dislike can dislike a tweet', done => {
        const tweetCreator = new User({
            name: 'Tweet Creator',
            studentId: '111111',
            password: '123456'
        });

        const tweetLiker = new User({
            name: 'Tweet Liker',
            studentId: '222222',
            password: '123456'
        });

        const tweet = new Tweet({
            userId: tweetCreator._id.toString(),
            likes: [tweetLiker._id.toString()],
            text: 'This is a test tweet.',
            images: [
                'url1',
                'url2'
            ],
        });

        const disLikeProps = {
            userId: tweetLiker._id.toString(),
            kind: 'dislike'
        };

        Promise.all([tweetCreator.save(), tweetLiker.save(), tweet.save()])
            .then(() => {
                request(app)
                    .post(`/tweets/${tweet._id.toString()}`)
                    .send(disLikeProps)
                    .end((response) => {
                        Tweet.findOne({_id: tweet._id})
                            .then(tweet => {
                                assert(tweet.likes.length === 0);
                                done();
                            });
                    });
            });
    });
});
