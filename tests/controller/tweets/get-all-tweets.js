const assert = require('assert');
const request = require('supertest');
const app = require('../../../app');

describe('Tweets controller', () => {
    it('GET to /tweets gets all tweets', (done) => {
        request(app)
            .get('/tweets')
            .end((err, response) => {
                assert(response.body.length === 0);
                done();
            });
    });
});
