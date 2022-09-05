const config = require('../configs/db.config');
const mongoose = require('mongoose');

const URL = `mongodb://${config.username}/${config.password}:${config.port}@${config.host}:${config.port}/${config.document}`;

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;

