const assert = require('assert');
const Gallery = require('../../../src/models/gallery');

describe('Creating records', () => {
    it('saves a gallery', (done) => {
        const gallery = new Gallery({
            images: [
                "url1",
                "url2",
                "url3",
                "url4",
                "url5",
                "url6",
            ],
        });

        gallery.save()
            .then(() => {
                assert(!gallery.isNew);
                done();
            });
    });
});
