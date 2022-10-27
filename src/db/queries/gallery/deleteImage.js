const Gallery = require('../../models/gallery');

module.exports = (name) => {
    return Gallery.findOneAndRemove(name);
};