// const config = require('../configs/db.config');
const mongoose = require('mongoose');

// const URL = `mongodb://${config.username}:${config.password}@${config.host}:${config.port}/${config.document}?${config.options}`;
const URL = 'mongodb://localhost/aut_graduation';

module.exports = () => {
    // connect to db
    if (process.env.NODE_ENV !== 'test') {
        mongoose.connect('mongodb://localhost/aut_graduation')
            .then(() => console.log('connected to db'))
            .catch(err => console.error('could not connect to db', err));
    }
}


