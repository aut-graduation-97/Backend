const {uploadImage} = require('../db/queries/gallery/uploadImage');
const getAllImages = require('../db/queries/gallery/getAllImages');
const deleteImage = require('../db/queries/gallery/deleteImage');

module.exports = {
    async uploadImage(imagePath, imageName) {
        return await uploadImage(imagePath, imageName)
    },

    getAllImages() {
        return getAllImages();
    },

    deleteImage(name) {
        return deleteImage(name);
    },
}
