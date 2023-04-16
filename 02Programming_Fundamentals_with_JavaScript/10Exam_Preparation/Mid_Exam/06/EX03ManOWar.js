function manOWar(input) {

    const maxHealthCapacity = Number(input[2]);

    let pirateShip = input[0].split('>').map(s => { return Number(s) });
    let warship = input[1].split('>').map(s => { return Number(s) });
    let commands = input.slice(3);
    let command = commands[0];
    let index = 0;
    let warshipHasSunken = false;
    let pirateShipHasSunken = false;

    while (command !== 'Retire') {

        let comanndParams = command.split(' ');
        let commandName = comanndParams[0];

        switch (commandName) {
            case 'Fire':

                let warshipSectionIndex = Number(comanndParams[1]);
                let sectionDamage = Number(comanndParams[2]);

                if (warshipSectionIndex >= 0 && warshipSectionIndex < warship.length) {

                    warship[warshipSectionIndex] -= sectionDamage;

                    if (warship[warshipSectionIndex] <= 0) {

                        console.log('You won! The enemy ship has sunken.');
                        warshipHasSunken = true;

                    }

                }

                break;
            case 'Defend':

                let startIndex = Number(comanndParams[1]);
                let endIndex = Number(comanndParams[2]);
                let damage = Number(comanndParams[3]);

                if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {

                    for (let i = startIndex; i <= endIndex; i++) {

                        pirateShip[i] -= damage;

                        if (pirateShip[i] <= 0) {

                            console.log('You lost! The pirate ship has sunken.');
                            pirateShipHasSunken = true;
                            break;

                        }

                    }

                }

                break;
            case 'Repair':

                let pirateShipSectionIndex = Number(comanndParams[1]);
                let health = Number(comanndParams[2]);

                if (pirateShipSectionIndex >= 0 && pirateShipSectionIndex < pirateShip.length) {

                    pirateShip[pirateShipSectionIndex] = pirateShip[pirateShipSectionIndex] + health > maxHealthCapacity ?
                        maxHealthCapacity : pirateShip[pirateShipSectionIndex] + health;

                }

                break;
            case 'Status':

                let sectionsToRepair = pirateShip.filter(s => { return s < 0.2 * maxHealthCapacity }).length;
                console.log(`${sectionsToRepair} sections need repair.`);

                break;

        }

        if (warshipHasSunken || pirateShipHasSunken) {

            break;

        }

        index++;
        command = commands[index];

    }

    if (!pirateShipHasSunken && !warshipHasSunken) {

        let pirateShipSum = pirateShip.reduce((a, b) => { return a + b });
        let warshipSum = warship.reduce((a, b) => { return a + b });

        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warshipSum}`);

    }

}

// manOWar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"]);
// manOWar(["2>3>4>5>2", "6>7>8>9>10>11", "20", "Status", "Fire 2 3", "Defend 0 4 11", "Repair 3 18", "Retire"]);