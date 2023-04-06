function counterStrike(input) {

    let energy = Number(input[0]);
    let battleTurns = input.slice(1);
    let turn = battleTurns[0];
    let index = 0;
    let victories = 0;
    let isEnergyEnought = true;

    while (turn !== 'End of battle') {

        let distance = Number(turn);

        if (distance > energy) {

            isEnergyEnought = false;
            break;

        }

        energy -= distance;
        victories++;

        if (victories % 3 === 0) {

            energy += victories;

        }

        index++;
        turn = battleTurns[index];

    }

    console.log(isEnergyEnought ?
        `Won battles: ${victories}. Energy left: ${energy}` :
        `Not enough energy! Game ends with ${victories} won battles and ${energy} energy`);

}

// counterStrike((["100", "10", "10", "10", "1", "2", "3", "73", "10"]));
// counterStrike((["200", "54", "14", "28", "13", "End of battle"]));