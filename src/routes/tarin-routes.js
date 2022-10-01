const tarinController = require('../controllers/tarin-controller');

module.exports = (app) => {
    app.get('/init', tarinController.tarinList)
    app.put('/users/:id/tarin', tarinController.updateTarin)
}