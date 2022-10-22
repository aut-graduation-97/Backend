const {uploadImage} = require('../db/queries/gallery/uploadImage');
const getAllImages = require('../db/queries/gallery/getAllImages');

module.exports = {
    async uploadImage(imagePath, imageName) {
        return await uploadImage(imagePath, imageName)
    },

    getAllImages() {
        return getAllImages();
    },
}
