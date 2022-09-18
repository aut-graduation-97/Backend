const mongoose = require('mongoose');

before((done) => {
    mongoose.connect(`mongodb://localhost/aut_graduation_test`);
    mongoose.connection
        .once('open', () => {
            done();
        })
        .on('error', (error) => {
            console.warn('Warning', error);
        });
});

beforeEach((done) => {
    mongoose.connection.db.dropDatabase()
        .then(() => done())
        .catch(() => done());
});

after((done) => {
    mongoose.connection.db.dropDatabase()
        .then(() => mongoose.connection.close())
        .then(() => done())
        .catch(() => done());
});
