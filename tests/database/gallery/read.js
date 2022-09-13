const assert = require('assert');
const Gallery = require('../../../src/models/gallery');

describe('Reading galleries out of the database', () => {
    let gallery;

    beforeEach((done) => {
        gallery = new Gallery({
            images: [
                "url1",
                "url2",
                "url3",
                "url4",
            ],
        });

        gallery.save()
            .then(() => {
                done();
            });

    });

    it('find a gallery with a particular id', (done) => {
        Gallery.findOne({
            _id: gallery._id
        }).then((gallery) => {
            assert(
                gallery.images[0] === 'url1' &&
                gallery.images[1] === 'url2' &&
                gallery.images[2] === 'url3' &&
                gallery.images[3] === 'url4'
            );
            done();
        });
    });
});
