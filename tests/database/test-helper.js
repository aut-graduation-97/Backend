// noinspection JSCheckFunctionSignatures

const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/aut_graduation_test`);

before((done) => {
    mongoose.connection
        .once('open', () => {
            done();
        })
        .on('error', (error) => {
            console.warn('Warning', error);
        });
});

beforeEach((done) => {
    mongoose.connection.collections.galleries.drop()
        .then(
            mongoose.connection.collections.tweets.drop()
        )
        .then(
            mongoose.connection.collections.users.drop()
        )
        .then(done());
});
