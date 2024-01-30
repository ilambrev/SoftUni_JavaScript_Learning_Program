const createCalculator = require('./L07AddSubtract.js');
const assert = require('chai').assert;

describe('createCalculator function test', () => {

    it('shoud return "object" when check type of return result', () => {
        const calculator = createCalculator();
        const expectedResult = 'object';

        assert.equal(typeof calculator, expectedResult);
    });

    it('shoud return 0 when execute get method on created object', () => {
        const calculator = createCalculator();
        const expectedResult = 0;

        assert.equal(calculator.get(), expectedResult);
    });

    it('shoud return 0 when try to modify directly internal value property', () => {
        const calculator = createCalculator();
        calculator.value = 5;
        const expectedResult = 0;

        assert.equal(calculator.get(), expectedResult);
    });

    it('shoud return 5 when add 5 as number', () => {
        const calculator = createCalculator();
        const num = 5;
        const expectedResult = 5;
        calculator.add(num);

        assert.equal(calculator.get(), expectedResult);
    });

    it('shoud return 5 when add "5" as string', () => {
        const calculator = createCalculator();
        const num = '5';
        const expectedResult = 5;
        calculator.add(num);

        assert.equal(calculator.get(), expectedResult);
    });

    it('shoud return -5 when subtract 5 as number', () => {
        const calculator = createCalculator();
        const num = 5;
        const expectedResult = -5;
        calculator.subtract(num);

        assert.equal(calculator.get(), expectedResult);
    });

    it('shoud return -5 when subtract "5" as string', () => {
        const calculator = createCalculator();
        const num = '5';
        const expectedResult = -5;
        calculator.subtract(num);

        assert.equal(calculator.get(), expectedResult);
    });

    it('shoud return error when try to add value that can not be parsed to number', () => {
        const calculator = createCalculator();
        const num = 'five';
        calculator.add(num);

        assert.isTrue(Number.isNaN(calculator.get()));
    });

    it('shoud return error when try to subtract value that can not be parsed to number', () => {
        const calculator = createCalculator();
        const num = 'five';
        calculator.subtract(num);

        assert.isTrue(Number.isNaN(calculator.get()));
    });

});