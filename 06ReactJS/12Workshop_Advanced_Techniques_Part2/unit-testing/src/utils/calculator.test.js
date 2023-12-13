import * as calculator from './calculator';

describe('Calculator Sum', () => {

    test('Sum of positive numbers should be positive', () => {
        // Arrange
        const first = 1;
        const second = 2;
        const expectedResult = 3;

        // Act
        const actualResult = calculator.sum(first, second);

        // Assert
        expect(actualResult).toBe(expectedResult);

    });

    // it.only - runs only this test
    // it.skip - skip only this test

    it('Should return negative number when adding negative numbers', () => {
        expect(calculator.sum(-1, -2)).toBe(-3);
    });

    test('Use undefined as an argument should return NaN', () => {
        expect(calculator.sum(undefined, 2)).toBe(NaN);
    });

    test('Use string as an argument should return number', () => {
        expect(calculator.sum('1', 2)).toBe(3);
    });

});

describe('Calculator Divide', () => {
    test('Should throw error when divide by zero', () => {
        expect(() => calculator.divide(2, 0)).toThrow('Division by zero is not permited!');
    });
});