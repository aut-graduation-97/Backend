const authRoutes = require('./auth.route');
const tarinRoutes = require('./tarin.route');
const userRoutes = require('./user.route');
const galleryRoutes = require('./gallery.route');

module.exports = (app) => {
    authRoutes(app);
    tarinRoutes(app);
    userRoutes(app);
    galleryRoutes(app);

};
