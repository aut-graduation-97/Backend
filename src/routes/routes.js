const authRoutes = require('./auth-routes');
const tarinRoutes = require('./tarin-routes');


module.exports = (app) => {
    // define your routes here
    authRoutes(app)
    tarinRoutes(app)
}