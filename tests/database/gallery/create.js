const assert = require('assert');
const Gallery = require('../../../src/models/gallery');

describe('Creating records', () => {
    beforeEach((done) => {
        Gallery.deleteMany({}).then(() => done());
    });

    it('saves a gallery', (done) => {
        const gallery = new Gallery({
            images: ["url1", "url2"],
        });

        gallery.save()
            .then(() => {
                assert(!gallery.isNew);
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });
    });

    afterEach((done) => {
        Gallery.deleteMany({})
            .then(() => {
                done();
            });
    });
});
