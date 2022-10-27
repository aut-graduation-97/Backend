const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GallerySchema = new Schema({
    fullHD: {
        type: String,
        required: [true, 'fullHD is required'],
        validate: {
            validator: (path) => path.length <= 200,
            message: "fullHD must be less than 200 characters"
        },
    },

    name: {
        type: String,
        required: [true, 'Name is required'],
        validate: {
            validator: (name) => name.length <= 180,
            message: "Name must be less than 180 characters"
        },
    },
});

const Gallery = mongoose.model('gallery', GallerySchema);
module.exports = Gallery;
