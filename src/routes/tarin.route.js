const tarinController = require('../controllers/tarin.controller');

module.exports = (app) => {
    app.get('/tarin', tarinController.tarinList);
    app.put('/users/:id/tarin', tarinController.updateTarin);
    app.get('/tarin/:id', tarinController.tarinResult);
};
