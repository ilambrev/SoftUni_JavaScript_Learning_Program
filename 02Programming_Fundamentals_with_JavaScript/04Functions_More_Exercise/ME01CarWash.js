function carWash(commands) {

    let carCleanedPercentage = 0;

    let soap = (carCleanedPercentage) => carCleanedPercentage + 10;

    let water = carCleanedPercentage => carCleanedPercentage * 1.20;

    let vacuumCleaner = carCleanedPercentage => carCleanedPercentage * 1.25;

    let mud = carCleanedPercentage => carCleanedPercentage * 0.90;

    let executeCommand = function (command, carCleanedPercentage) {

        switch (command) {
            case 'soap':
                carCleanedPercentage = soap(carCleanedPercentage);
                break;
            case 'water':
                carCleanedPercentage = water(carCleanedPercentage);
                break;
            case 'vacuum cleaner':
                carCleanedPercentage = vacuumCleaner(carCleanedPercentage);
                break;
            case 'mud':
                carCleanedPercentage = mud(carCleanedPercentage);
                break;
        }

        return carCleanedPercentage;

    }

    for (let i = 0; i < commands.length; i++) {

        carCleanedPercentage = executeCommand(commands[i], carCleanedPercentage);

    }

    console.log(`The car is ${carCleanedPercentage.toFixed(2)}% clean.`);

}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);