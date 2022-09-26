const authRoutes = require('./auth-routes');

module.exports = (app) => {
    // define your routes here
    authRoutes(app);
}