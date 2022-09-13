const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GallerySchema = new Schema({
    images: [
        {
            type: String,
            unique: true,
            validate: {
                validator: (image) => image.length <= 200,
                message: "Image URL must be less than 200 characters."
            }
        },
    ],
});

const Gallery = mongoose.model('gallery', GallerySchema);
module.exports = Gallery;
