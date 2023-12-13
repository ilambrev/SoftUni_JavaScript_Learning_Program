export const sum = (a, b) => Number(a) + Number(b);
export const divide = (a, b) => {
    if (b === 0) {
        throw new Error('Division by zero is not permited!');
    }

    return a / b;
};