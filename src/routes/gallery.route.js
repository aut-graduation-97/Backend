const galleryController = require('../controllers/gallery.controller');
const {uploadGallery} = require('../middlewares/upload.middleware');

module.exports = (app) => {
    app.post('/gallery', uploadGallery.single('address'), galleryController.uploadImage.bind(galleryController))
    app.get('/gallery', galleryController.getAllImages)
    app.delete('/gallery/:name', galleryController.deleteImage)
};