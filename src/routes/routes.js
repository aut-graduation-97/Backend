const authRoutes = require('./auth.route');
const tarinRoutes = require('./tarin.route');


module.exports = (app) => {
    // define your routes here
    authRoutes(app);
    tarinRoutes(app);
};
