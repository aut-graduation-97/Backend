const assert = require('assert');
const User = require('../../../src/db/models/user');

describe('Validating records', () => {
    it('requires a user name', () => {
        const user = new User({
            name: undefined,
            studentId: '123456',
            password: '123456',
        });
        const validationResult = user.validateSync();

        const message = validationResult.errors.name.message;
        assert(message === 'Name is required');
    });

    it('requires a user studentId', () => {
        const user = new User({
            name: 'Joe',
            studentId: undefined,
            password: '123456',
        });
        const validationResult = user.validateSync();

        const message = validationResult.errors.studentId.message;
        assert(message === 'Student id is required');
    });

    it('requires a user password', () => {
        const user = new User({
            name: 'Joe',
            studentId: '123456',
            password: undefined,
        });
        const validationResult = user.validateSync();

        const message = validationResult.errors.password.message;
        assert(message === 'Password is required');
    });
});
