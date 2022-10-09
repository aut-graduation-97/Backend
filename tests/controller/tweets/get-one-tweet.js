const assert = require('assert');
const request = require('supertest');
const app = require('../../../app');

const mongoose = require('mongoose');
const Tweet = mongoose.model('tweet');
const User = require('../../../src/db/models/user');

describe('Tweets controller', () => {
    it('GET to /tweets/:id gets a single tweet', (done) => {
        // const creator = new User({
        //     name: 'Alexandre (tweet creator)',
        //     studentId: '111111',
        //     password: '123456',
        // });
        //
        // const liker = new User({
        //     name: 'Jeffery (tweet liker)',
        //     studentId: '222222',
        //     password: '123456',
        // });
        //
        // const tweet = new Tweet({
        //     userId: creator._id.toString(),
        //     likes: [
        //         liker._id.toString(),
        //     ],
        //     text: 'This is a test tweet.',
        //     images: [
        //         'url1',
        //         'url2'
        //     ],
        // });
        //
        // creator.save()
        //     .then(() =>
        //         liker.save()
        //     )
        //     .then(() =>
        //         tweet.save()
        //     )
        //     .then(() => {
        //         request(app)
        //             .get(`/tweets/${tweet._id}`)
        //             .end((err, response) => {
        //                 assert(response.body.text.toString() === 'This is a test tweet.');
        //                 done();
        //             });
        //     });
        done();
    });
});
