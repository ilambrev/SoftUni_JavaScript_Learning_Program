const isSymmetric = require('./L05CheckForSymmetry');
const assert = require('chai').assert;

describe('isSymmetric function test', () => {

    it('shoud return true with [1, 2, 3, 2, 1] as input', () => {
        const arr = [1, 2, 3, 2, 1];
        const expectedResult = true;

        const result = isSymmetric(arr);

        assert.equal(result, expectedResult);
    });

    it('shoud return false with [1, 2, 3, 4, 5] as input', () => {
        const arr = [1, 2, 3, 4, 5];
        const expectedResult = false;

        const result = isSymmetric(arr);

        assert.equal(result, expectedResult);
    });

    it('shoud return true with [1, 1] as input', () => {
        const arr = [1, 1];
        const expectedResult = true;

        const result = isSymmetric(arr);

        assert.equal(result, expectedResult);
    });

    it('shoud return true with [5] as input', () => {
        const arr = [5];
        const expectedResult = true;

        const result = isSymmetric(arr);

        assert.equal(result, expectedResult);
    });

    it('shoud return true with [] as input', () => {
        const arr = [];
        const expectedResult = true;

        const result = isSymmetric(arr);

        assert.equal(result, expectedResult);
    });

    it('shoud return true with ["one", "two", "three", "two", "one"] as input', () => {
        const arr = ['one', 'two', 'three', 'two', 'one'];
        const expectedResult = true;

        const result = isSymmetric(arr);

        assert.equal(result, expectedResult);
    });

    it('shoud return false with input tha is not array', () => {
        const num = 5;
        const text = 'Test';
        const emptyValue = null;
        const notNumber = NaN;
        const expectedResult = false;

        assert.equal(isSymmetric(num), expectedResult);
        assert.equal(isSymmetric(text), expectedResult);
        assert.equal(isSymmetric(emptyValue), expectedResult);
        assert.equal(isSymmetric(notNumber), expectedResult);
    });

    it('shoud return true with [[1], [2], [1]] as input', () => {
        const arr = [[1], [2], [1]];
        const expectedResult = true;

        const result = isSymmetric(arr);

        assert.equal(result, expectedResult);
    });

});