const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('./src/middlewares/logger.middelware');
const routes = require('./src/routes/routes');
const mongoose = require('mongoose');

const app = express();

// connect to db
if (process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://localhost/aut_graduation');
}

// view engine setup
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// define routes
routes(app);


app.use((req, res, next) => {
    next(createError(404));
});


app.use((err, req, res) => {
    //log as error if it is an internal server error
    if (err.statusCode >= 500) {
        console.error(err);
    } else {
        console.error(err);
    }

    res.status(err.statusCode || 500)
        .json({message: 'something went wrong!', error: err})
        .send();
});

module.exports = app;
