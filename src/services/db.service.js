const config = require('../configs/db.config');
const mongoose = require('mongoose');

// const URL = `mongodb://${config.username}:${config.password}@${config.host}:${config.port}/${config.document}?${config.options}`;

// mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
// const db = mongoose.connection;


// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// module.exports = db;

module.exports = () => {
    mongoose.connect('mongodb://localhost/aut_graduation_test');
};

