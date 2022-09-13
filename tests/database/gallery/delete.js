const assert = require('assert');
const Gallery = require('../../../src/models/gallery');

describe('Deleting a gallery', () => {
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

    it('removing a gallery', (done) => {
        Gallery.deleteOne({_id: gallery._id})
            .then(() => Gallery.findOne({images: gallery.images}))
            .then((gallery) => {
                assert(gallery === null);
                done();
            });
    });
});
