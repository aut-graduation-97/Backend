const assert = require('assert');
const User = require('../../../src/models/user');
const Tweet = require('../../../src/models/tweets');

describe('Validating records', () => {
    it('requires text', (done) => {
        const user = new User({
            name: 'Joe', studentId: '123456', password: '123456',
        });
        const tweet = new Tweet({
            userId: user._id, likes: [], text: undefined, images: ['url1', 'url2'],
        });

        user.save()
            .then(() => {
                const validationResult = tweet.validateSync();

                const message = validationResult.errors.text.message;
                assert(message === 'Text is required');
                done();
            });
    });

    it('requires text length to be <= 180', (done) => {
        const user = new User({
            name: 'Joe', studentId: '123456', password: '123456',
        });

        let text = "";
        for (let i = 1; i <= 181; i++) {
            text += "a";
        }
        const tweet = new Tweet({
            userId: user._id, likes: [], text, images: ['url1', 'url2'],
        });

        user.save()
            .then(() => {
                const validationResult = tweet.validateSync();

                const message = validationResult.errors.text.message;
                assert(message === 'Text must be less than 180 characters');
                done();
            });
    });

    it('Image URL must be less than 200 characters', (done) => {
        const user = new User({
            name: 'Joe', studentId: '123456', password: '123456',
        });

        let url = "";
        for (let i = 1; i <= 201; i++) {
            url += "a";
        }
        const tweet = new Tweet({
            userId: user._id, likes: [], text: 'tweet text', images: [url],
        });

        user.save()
            .then(() => {
                const validationResult = tweet.validateSync();

                const message = validationResult.errors['images.0'].message;
                assert(message === 'Image URL must be less than 200 characters');
                done();
            });
    });
});
