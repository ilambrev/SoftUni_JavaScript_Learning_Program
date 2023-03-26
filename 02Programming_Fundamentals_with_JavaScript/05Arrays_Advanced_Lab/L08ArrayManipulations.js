function arrayManipulations(input) {

    let numbersArr = input[0].split(' ').map(Number);
    let commandsArr = input.slice(1);

    for (let command of commandsArr) {

        let commandParams = command.split(' ');
        let commandName = commandParams[0];

        switch (commandName) {

            case 'Add':

                numbersArr.push(Number(commandParams[1]));

                break;
            case 'Remove':

                numbersArr = numbersArr.filter(function (x) {
                    return x !== Number(commandParams[1]);
                });

                break;
            case 'RemoveAt':

                let indexToRemove = Number(commandParams[1]);

                if (indexToRemove === 0) {

                    numbersArr.shift();

                } else if (indexToRemove === numbersArr.length - 1) {

                    numbersArr.pop();

                } else {

                    numbersArr = numbersArr.slice(0, indexToRemove).concat(numbersArr.slice(indexToRemove + 1));

                }

                break;
            case 'Insert':

                let numberToAdd = Number(commandParams[1]);
                let indexToAdd = Number(commandParams[2]);

                if (indexToAdd === 0) {

                    numbersArr.unshiftshift(numberToAdd);

                } else if (indexToAdd === numbersArr.length - 1) {

                    numbersArr.pop(numberToAdd);

                } else {

                    let newArr = numbersArr.slice(0, indexToAdd);
                    newArr.push(numberToAdd);
                    numbersArr = newArr.concat(numbersArr.slice(indexToAdd));

                }

                break;

        }

    }

    console.log(numbersArr.join(' '));

}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);