const logger = require('morgan');

if (process.env.NODE_ENV === 'development') {
    module.exports = logger('dev');
} else if (process.env.NODE_ENV === 'production') {
    module.exports = logger('short');
} else {
    module.exports = logger('tiny');
}
