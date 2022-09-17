const assert = require('assert');
const Gallery = require('../../../src/db/models/gallery');

describe('Creating records', () => {

    it('saves a gallery', (done) => {
        const gallery = new Gallery({
            images: ["url1", "url2"],
        });

        Gallery.deleteMany({})
            .then(() => gallery.save())
            .then(() => {
                assert(!gallery.isNew);
            })
            .then(() => Gallery.deleteMany({}))
            .then(() => {
                done();
            });
    });
});
