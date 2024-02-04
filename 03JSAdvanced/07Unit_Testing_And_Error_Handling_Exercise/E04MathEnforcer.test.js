const mathEnforcer = require('./E04MathEnforcer.js');
const assert = require('chai').assert;

describe('mathEnforcer function test', () => {

    describe('addFive method test', () => {

        it('shoud return 15 when parameter "num" is equal to 10', () => {
            const num = 10;
            const expectedResult = 15;

            const result = mathEnforcer.addFive(num);

            assert.equal(result, expectedResult);
        });

        it('shoud return 4.89 when parameter "num" is equal to -0.11', () => {
            const num = -0.11;
            const expectedResult = 4.89;

            const result = mathEnforcer.addFive(num);

            assert.equal(result, expectedResult);
        });

        it('shoud return -5 when parameter "num" is equal to -10', () => {
            const num = -10;
            const expectedResult = -5;

            const result = mathEnforcer.addFive(num);

            assert.equal(result, expectedResult);
        });

        it('shoud return 5.11 when parameter "num" is equal to 0.11', () => {
            const num = 0.11;
            const expectedResult = 5.11;

            const result = mathEnforcer.addFive(num);

            assert.closeTo(result, expectedResult, 0.01);
        });

        it('shoud return undefined when parameter "num" is not a number', () => {
            const num1 = 'one';
            const num2 = null;
            const expectedResult = undefined;

            const result1 = mathEnforcer.addFive(num1);
            const result2 = mathEnforcer.addFive(num2);
            const result3 = mathEnforcer.addFive();

            assert.equal(result1, expectedResult);
            assert.equal(result2, expectedResult);
            assert.equal(result3, expectedResult);
        });

    });

    describe('subtractTen method test', () => {

        it('shoud return 0 when parameter "num" is equal to 10', () => {
            const num = 10;
            const expectedResult = 0;

            const result = mathEnforcer.subtractTen(num);

            assert.equal(result, expectedResult);
        });

        it('shoud return -20 when parameter "num" is equal to -10', () => {
            const num = -10;
            const expectedResult = -20;

            const result = mathEnforcer.subtractTen(num);

            assert.equal(result, expectedResult);
        });

        it('shoud return -9.89 when parameter "num" is equal to 0.11', () => {
            const num = 0.11;
            const expectedResult = -9.89;

            const result = mathEnforcer.subtractTen(num);

            assert.closeTo(result, expectedResult, 0.01);
        });

        it('shoud return -10.11 when parameter "num" is equal to -0.11', () => {
            const num = -0.11;
            const expectedResult = -10.11;

            const result = mathEnforcer.subtractTen(num);

            assert.closeTo(result, expectedResult, 0.01);
        });

        it('shoud return undefined when parameter "num" is not a number', () => {
            const num1 = 'one';
            const num2 = null;
            const expectedResult = undefined;

            const result1 = mathEnforcer.subtractTen(num1);
            const result2 = mathEnforcer.subtractTen(num2);
            const result3 = mathEnforcer.subtractTen();

            assert.equal(result1, expectedResult);
            assert.equal(result2, expectedResult);
            assert.equal(result3, expectedResult);
        });

    });

    describe('sum method test', () => {

        it('shoud return 15 when parameter "num1" is equal to 10 and parameter "num2 is equal to 5', () => {
            const num1 = 10;
            const num2 = 5;
            const expectedResult = 15;

            const result = mathEnforcer.sum(num1, num2);

            assert.equal(result, expectedResult);
        });

        it('shoud return -15 when parameter "num1" is equal to -10 and parameter "num2 is equal to -5', () => {
            const num1 = -10;
            const num2 = -5;
            const expectedResult = -15;

            const result = mathEnforcer.sum(num1, num2);

            assert.equal(result, expectedResult);
        });

        it('shoud return -5 when parameter "num1" is equal to -10 and parameter "num2" is equal to 5', () => {
            const num1 = -10;
            const num2 = 5;
            const expectedResult = -5;

            const result = mathEnforcer.sum(num1, num2);

            assert.equal(result, expectedResult);
        });

        it('shoud return 5.11 when parameter "num1" is equal to 0.11 and parameter "num2" is equal to -5', () => {
            const num1 = 0.11;
            const num2 = -5;
            const expectedResult = -4.89;

            const result = mathEnforcer.sum(num1, num2);

            assert.closeTo(result, expectedResult, 0.01);
        });

        it('shoud return 5.11 when parameter "num1" is equal to 0.117 and parameter "num2" is equal to 7.388', () => {
            const num1 = 0.117;
            const num2 = 7.388;
            const expectedResult = 7.505;

            const result = mathEnforcer.sum(num1, num2);

            assert.closeTo(result, expectedResult, 0.01);
        });

        it('shoud return undefined when some of two parameters is not a number', () => {
            const num1 = 'one';
            const num2 = 5;
            const num3 = null;
            const expectedResult = undefined;

            const result1 = mathEnforcer.sum(num1, num2);
            const result2 = mathEnforcer.sum(num1);
            const result3 = mathEnforcer.sum();
            const result4 = mathEnforcer.sum(num2, num3);
            const result5 = mathEnforcer.sum(num1, num3);

            assert.equal(result1, expectedResult);
            assert.equal(result2, expectedResult);
            assert.equal(result3, expectedResult);
            assert.equal(result4, expectedResult);
            assert.equal(result5, expectedResult);
        });

    });

});