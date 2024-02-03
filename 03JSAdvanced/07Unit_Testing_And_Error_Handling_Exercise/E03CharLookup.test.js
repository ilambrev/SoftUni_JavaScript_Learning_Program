const lookupChar = require('./E03CharLookup.js');
const assert = require('chai').assert;

describe('lookupChar function test', () => {

    it('shoud return "undefined" when pass parameter "string" different from string', () => {
        const string1 = null;
        const string2 = undefined;
        const string3 = 1;
        const index = 1;
        const expectedResult = undefined;

        const result1 = lookupChar(string1, index);
        const result2 = lookupChar(string2, index);
        const result3 = lookupChar(string3, index);

        assert.equal(result1, expectedResult);
        assert.equal(result2, expectedResult);
        assert.equal(result3, expectedResult);
    });

    it('shoud return "undefined" when pass parameter "index" different from number', () => {
        const string = 'test';
        const index1 = null;
        const index2 = 1.2;
        const expectedResult = undefined;

        const result1 = lookupChar(string, index1);
        const result2 = lookupChar(string, index2);

        assert.equal(result1, expectedResult);
        assert.equal(result2, expectedResult);
    });

    it('shoud return "undefined" when pass two parameters of wrong type', () => {
        const string = 20;
        const index = 1.2;
        const expectedResult = undefined;

        const result1 = lookupChar(string, index);
        const result2 = lookupChar();

        assert.equal(result1, expectedResult);
        assert.equal(result2, expectedResult);
    });

    it('shoud return error message when pass parameter "index" with wrong value', () => {
        const string1 = 'test';
        const string2 = '';
        const index1 = -1;
        const index2 = 4;
        const index3 = 0;
        const expectedResult = 'Incorrect index';

        const result1 = lookupChar(string1, index1);
        const result2 = lookupChar(string1, index2);
        const result3 = lookupChar(string2, index3);

        assert.equal(result1, expectedResult);
        assert.equal(result2, expectedResult);
        assert.equal(result3, expectedResult);
    });

    it('shoud return "t" when pass "test" - string and index 0', () => {
        const string = 'test';
        const index = 2;
        const expectedResult = 's';

        const result = lookupChar(string, index);

        assert.equal(result, expectedResult);
    });

});