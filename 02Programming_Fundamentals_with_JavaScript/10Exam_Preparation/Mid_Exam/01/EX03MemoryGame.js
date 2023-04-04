function memoryGame(input) {

    let elements = input[0].split(' ');
    let playerInput = input[1];
    let index = 1;
    let turnsCounter = 0;

    while (playerInput !== 'end') {

        turnsCounter++;

        let indexes = playerInput.split(' ');

        let firstIndex = Number(indexes[0]);
        let secondIndex = Number(indexes[1]);

        if (firstIndex !== secondIndex && firstIndex >= 0 && firstIndex < elements.length &&
            secondIndex >= 0 && secondIndex < elements.length) {

            let firstElement = elements[firstIndex];
            let secondElement = elements[secondIndex];

            if (firstElement === secondElement) {

                console.log(`Congrats! You have found matching elements - ${firstElement}!`);

                elements.splice(Math.max(firstIndex, secondIndex), 1);
                elements.splice(Math.min(firstIndex, secondIndex), 1);

            } else {

                console.log(`Try again!`);

            }

        } else {

            let elementToAdd = `-${turnsCounter}a`;
            let newElementIndex = Math.floor(elements.length / 2);

            elements.splice(newElementIndex, 0, elementToAdd);
            elements.splice(newElementIndex, 0, elementToAdd);

            console.log('Invalid input! Adding additional elements to the board');


        }

        if (elements.length === 0) {

            console.log(`You have won in ${turnsCounter} turns!`);
            break;

        }

        index++;
        playerInput = input[index];

    }


    if (elements.length > 0) {

        console.log('Sorry you lose :(\n' + elements.join(' '));

    }

}

// memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
// memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
// memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);