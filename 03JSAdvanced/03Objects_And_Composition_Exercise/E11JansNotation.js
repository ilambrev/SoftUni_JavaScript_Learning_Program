function jansNotation(input) {

    const numbers = [];
    const action = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }

    for (let record of input) {

        const typeOfRecord = typeof record;

        if (typeOfRecord == 'number') {

            numbers.push(record);

        } else if (typeOfRecord == 'string') {

            if (numbers.length >= 2) {
                const b = numbers.pop();
                const a = numbers.pop();
                numbers.push(action[record](a, b));
            } else {
                console.log('Error: not enough operands!');
                return;
            }

        }

    }

    console.log(numbers.length == 1 ? numbers[0] : 'Error: too many operands!');

}

// jansNotation([3, 4, '+']);
// jansNotation([5, 3, 4, '*', '-']);
// jansNotation([7, 33, 8, '-']);
// jansNotation([15, '/']);