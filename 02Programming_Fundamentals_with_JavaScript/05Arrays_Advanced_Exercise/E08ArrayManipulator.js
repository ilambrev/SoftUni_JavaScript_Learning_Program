function arrayManipulator(numbers, commands) {

    let resultArr = numbers.slice();
    let command = commands[0];
    let index = 0;

    while (command !== 'print') {

        let commandParams = command.split(' ');
        let commandName = commandParams[0];

        switch (commandName) {
            case 'add':

                let indexOfElementToAdd = Number(commandParams[1]);
                let elementToAdd = Number(commandParams[2]);

                if (indexOfElementToAdd >= 0 && indexOfElementToAdd <= resultArr.length) {

                    resultArr.splice(indexOfElementToAdd, 0, elementToAdd);

                }

                break;
            case 'addMany':

                let indexToAddElements = Number(commandParams[1]);
                let elementsToAdd = commandParams.slice(2).map(e => Number(e));

                if (indexToAddElements >= 0 && indexToAddElements <= resultArr.length) {

                    resultArr.splice(indexToAddElements, 0, ...elementsToAdd);

                }

                break;
            case 'contains':

                let element = Number(commandParams[1]);

                if (resultArr.filter(e => e === element).length > 0) {

                    console.log(resultArr.indexOf(element));

                } else {

                    console.log(-1);

                }

                break;
            case 'remove':

                let indexOfElementToRemove = Number(commandParams[1]);

                if (indexOfElementToRemove >= 0 && indexOfElementToRemove < resultArr.length) {

                    resultArr.splice(indexOfElementToRemove, 1);

                }

                break;
            case 'shift':

                let positions = Number(commandParams[1]) % resultArr.length;

                for (let i = 1; i <= positions; i++) {

                    resultArr.push(resultArr[0]);
                    resultArr.shift(0);

                }

                break;
            case 'sumPairs':

                let pairs = [];
                let elemantsToPair = resultArr.length % 2 === 0 ? resultArr.length : resultArr.length - 1;

                for (let i = 1; i <= elemantsToPair; i += 2) {

                    resultArr[i - 1] += resultArr[i];

                }

                resultArr = resultArr.filter((e, i) => i % 2 === 0).slice();

                break;
        }

        index++;
        command = commands[index];

    }

    console.log('[ ' + resultArr.join(', ') + ' ]');

}

// arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
// arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);