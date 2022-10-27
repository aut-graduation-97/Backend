const Gallery = require('../../models/gallery');

module.exports = () => {
    return Gallery.find({});
};