const {uploadImage} = require('../db/queries/gallery/uploadImage');

module.exports = {
    async uploadImage(imagePath, imageName){
        return await uploadImage(imagePath, imageName)
    },
}
