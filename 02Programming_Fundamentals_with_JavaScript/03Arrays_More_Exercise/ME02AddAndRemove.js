function addAndRemove(commands) {

    const initialNumber = 1;
    let resultArr = [];

    for (let i = 0; i < commands.length; i++) {

        let valueToAdd = initialNumber + i * initialNumber;

        if (commands[i] === 'add') {

            resultArr.push(valueToAdd);

        } else if (commands[i] === 'remove') {

            resultArr = removeLastElement(resultArr);

        }

    }

    console.log(resultArr.length === 0 ? 'Empty' : resultArr.join(' '))

    function removeLastElement(array) {

        let newArray = [];

        for (let i = 0; i < array.length - 1; i++) {

            newArray.push(array[i]);

        }

        return (newArray);

    }

}

// addAndRemove(['add', 'add', 'add', 'add']);
// addAndRemove(['add', 'add', 'remove', 'add', 'add']);
// addAndRemove(['remove', 'remove', 'remove']);