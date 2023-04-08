function heartDelevery(input) {

    let houses = input[0].split('@').map(h => { return Number(h) });
    let commands = input.slice(1);
    let command = commands[0];
    let index = 0;
    let houseIndex = 0;

    while (command != 'Love!') {

        let commandParams = command.split(' ');
        let jumpLength = Number(commandParams[1]);

        houseIndex = houseIndex + jumpLength > houses.length - 1 ? 0 : houseIndex + jumpLength;

        if (houses[houseIndex] === 0) {

            console.log(`Place ${houseIndex} already had Valentine's day.`);

        } else {

            houses[houseIndex] -= 2;

            if (houses[houseIndex] === 0) {

                console.log(`Place ${houseIndex} has Valentine's day.`);

            }

        }

        index++;
        command = commands[index];

    }

    console.log(`Cupid's last position was ${houseIndex}.`);

    let housesWithoutValentines = houses.filter(h => h > 0).length;

    if (housesWithoutValentines === 0) {

        console.log('Mission was successful.');

    } else {

        console.log(`Cupid has failed ${housesWithoutValentines} places.`);

    }

}

// heartDelevery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
// heartDelevery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);