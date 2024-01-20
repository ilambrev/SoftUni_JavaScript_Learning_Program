const sum = require('./L04SumOfNumbers.js');
const assert = require('chai').assert;

describe('sum function test', () => {

    it('shoud return 37 with [1, 5, 7, 9, 15] as input', () => {
        const arr = [1, 5, 7, 9, 15];
        const expectedResult = 37;

        const result = sum(arr);

        assert.equal(result, expectedResult);
    });

    it('shoud return 9 with [1, -5, 7, -9, 15] as input', () => {
        const arr = [1, -5, 7, -9, 15];
        const expectedResult = 9;

        const result = sum(arr);

        assert.equal(result, expectedResult);
    });

    it('shoud return 5 with [5] as input', () => {
        const arr = [5];
        const expectedResult = 5;

        const result = sum(arr);

        assert.equal(result, expectedResult);
    });

    it('shoud return -5 with [-5] as input', () => {
        const arr = [-5];
        const expectedResult = -5;

        const result = sum(arr);

        assert.equal(result, expectedResult);
    });

    it('shoud return 0 with [] as input', () => {
        const arr = [];
        const expectedResult = 0;

        const result = sum(arr);

        assert.equal(result, expectedResult);
    });

});