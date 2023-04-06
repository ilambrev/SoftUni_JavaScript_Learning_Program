function arrayModifier(input) {

    let numbers = input[0].split(' ').map(n => { return Number(n) });
    let commands = input.slice(1);
    let command = commands[0];
    let index = 0;

    while (command !== 'end') {

        let commandParams = command.split(' ');
        let commandName = commandParams[0];

        switch (commandName) {
            case 'swap':
                swap(numbers, Number(commandParams[1]), Number(commandParams[2]));
                break;
            case 'multiply':
                multiply(numbers, Number(commandParams[1]), Number(commandParams[2]));
                break;
            case 'decrease':
                decrease(numbers);
                break;
        }


        index++;
        command = commands[index];

    }

    function swap(numbers, firstIndex, secondIndex) {

        let elementBuffer = numbers[firstIndex];

        numbers[firstIndex] = numbers[secondIndex];
        numbers[secondIndex] = elementBuffer;

    }

    function multiply(numbers, firstIndex, secondIndex) {

        numbers[firstIndex] *= numbers[secondIndex];

    }

    function decrease(numbers) {

        for (let i = 0; i < numbers.length; i++) {

            numbers[i] -= 1;

        }

    }

    console.log(numbers.join(', '));

}

// arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end']);
// arrayModifier(['1 2 3 4', 'swap 0 1', 'swap 1 2', 'swap 2 3', 'multiply 1 2', 'decrease', 'end']);