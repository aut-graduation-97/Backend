const Gallery = require('../../models/gallery');

module.exports = {
    uploadImage(imagePath, imageName){
        const image = new Gallery({
            fullHD: imagePath,
            name: imageName,
        }).save();
        return image
    },
}
