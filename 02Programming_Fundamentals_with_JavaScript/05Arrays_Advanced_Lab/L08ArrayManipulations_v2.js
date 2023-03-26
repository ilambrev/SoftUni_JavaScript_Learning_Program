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

                numbersArr.splice(indexToRemove, 1);

                break;
            case 'Insert':

                let numberToAdd = Number(commandParams[1]);
                let indexToAdd = Number(commandParams[2]);

                numbersArr.splice(indexToAdd, 0, numberToAdd);

                break;

        }

    }

    console.log(numbersArr.join(' '));

}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);