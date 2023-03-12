function ladybugs(input) {

    let sizeOfField = input[0];

    let field = new Array(sizeOfField);

    field.fill(0);

    let ladysbugPositions = input[1].split(' ');

    for (let position of ladysbugPositions) {

        let positionValue = Number(position);

        if (positionValue >= 0 && positionValue < field.length) {

            field[Number(position)] = 1;

        }

    }

    for (let i = 2; i < input.length; i++) {

        let commandDetails = input[i].split(' ');

        let ladybugIndex = Number(commandDetails[0]);
        let direction = commandDetails[1];
        let flyLength = Number(commandDetails[2]);

        if (ladybugIndex >= 0 && ladybugIndex < field.length && field[ladybugIndex] === 1 && flyLength !== 0) {

            if (direction === 'right') {

                let nextIndex = ladybugIndex + flyLength;

                if (nextIndex < field.length) {

                    while (nextIndex < field.length) {

                        if (field[nextIndex] === 0) {

                            field[nextIndex] = 1;
                            break;

                        }

                        nextIndex += flyLength;

                    }

                }

            } else if (direction === 'left') {

                let nextIndex = ladybugIndex - flyLength;

                if (nextIndex >= 0) {

                    while (nextIndex >= 0) {

                        if (field[nextIndex] === 0) {

                            field[nextIndex] = 1;
                            break;

                        }

                        nextIndex -= flyLength;

                    }

                }

            }

            field[ladybugIndex] = 0;

        }

    }

    console.log(field.join(' '));

}

// ladybugs([3, '0 1', '0 right 1', '2 right 1']);
// ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
// ladybugs([5, '3', '3 left 2', '1 left -2']);