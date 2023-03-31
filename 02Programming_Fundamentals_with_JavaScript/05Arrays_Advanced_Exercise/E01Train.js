function train(input) {

    let wagons = input[0].split(' ').map(element => {
        return Number(element);
    });
    let wagonCapacity = Number(input[1]);
    let commands = input.slice(2);

    for (let i = 2; i < input.length; i++) {

        let commandDetails = input[i].split(' ');

        if (commandDetails[0] === 'Add') {

            wagons.push(Number(commandDetails[1]));

        } else {

            let newPassengersNumber = Number(commandDetails[0]);

            for (let j = 0; j < wagons.length; j++) {

                if (wagonCapacity - wagons[j] >= newPassengersNumber) {

                    wagons[j] += newPassengersNumber;
                    break;

                }

            }

        }

    }

    console.log(wagons.join(' '));

}

// train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
// train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);