const assert = require('assert');
const Gallery = require('../../../src/models/gallery');

describe('Validating gallery records', () => {
    it('Image URL must be less than 200 characters', (done) => {
        let url = "";
        for (let i = 1; i <= 201; i++) {
            url += "a";
        }
        const gallery = new Gallery({
            images: [url],
        });

        const validationResult = gallery.validateSync();

        const message = validationResult.errors['images.0'].message;
        assert(message === 'Image URL must be less than 200 characters');
        done();
    });
});
