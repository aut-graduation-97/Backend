const assert = require('assert');
const Gallery = require('../../../db/models/gallery');

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

    it('update gallery images', (done) => {
        Gallery.updateOne({_id: gallery._id}, {images: ["url2", "url3", "url4", "url5"]})
            .then(() => Gallery.find({}))
            .then((galleries) => {
                assert(galleries[0].images[0] === "url2" &&
                    galleries[0].images[1] === "url3" &&
                    galleries[0].images[2] === "url4" &&
                    galleries[0].images[3] === "url5"
                );
                done();
            });
    });
});
