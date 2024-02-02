const isOddOrEven = require('./E02EvenOrOdd.js');
const assert = require('chai').assert;

describe('isOddOrEven function test', () => {

    it('shoud return "undefined" when pass parameter different from "string"', () => {
        const string = null;
        const expectedResult = undefined;

        const result = isOddOrEven(string);

        assert.equal(result, expectedResult);
    });

    it('shoud return "odd" when pass "test" - string with length equal to even number', () => {
        const string = 'test';
        const expectedResult = 'even';

        const result = isOddOrEven(string);

        assert.equal(result, expectedResult);
    });

    it('shoud return "odd" when pass "newtest" - string with length equal to odd number', () => {
        const string = 'newtest';
        const expectedResult = 'odd';

        const result = isOddOrEven(string);

        assert.equal(result, expectedResult);
    });

    it('shoud return "even" when pass row with different strings', () => {
        const string = 'run new test again';
        const expectedResult = 'even';

        const result = isOddOrEven(string);

        assert.equal(result, expectedResult);
    });

});