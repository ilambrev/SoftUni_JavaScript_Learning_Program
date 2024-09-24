function radioCrystals(data) {
    const operations = {
        'Cut': (currentThickness) => currentThickness * 0.75,
        'Lap': (currentThickness) => currentThickness * 0.20,
        'Grind': () => 20,
        'Etch': () => 2,
        'X-ray': () => 1,
        'Transporting and washing': (currentThickness) => Math.floor(currentThickness),
    };

    const targetThickness = data[0];

    for (let i = 1; i < data.length; i++) {
        console.log(`Processing chunk ${data[i]} microns`);

        while (data[i] > targetThickness) {
            performOperation(i, operations.Cut, 'Cut');
            performOperation(i, operations.Lap, 'Lap');
            performOperation(i, operations.Grind, 'Grind');
            performOperation(i, operations.Etch, 'Etch');
        }

        if (data[i] == targetThickness - 1) {
            data[i] += operations["X-ray"](data[1]);
            console.log(`X-ray x1`);
        }

        console.log(`Finished crystal ${data[i]} microns`);
    }


    function performOperation(crystal, operation, operationName) {
        let opNum = 0;

        while (data[crystal] > targetThickness) {
            const amountToRemove = operation(data[crystal]);

            if (data[crystal] - amountToRemove < targetThickness - 1) {
                break;
            }

            data[crystal] -= amountToRemove;

            opNum++;
        }

        if (opNum > 0) {
            data[crystal] = operations["Transporting and washing"](data[crystal]);
            console.log(`${operationName} x${opNum}`);
            console.log('Transporting and washing');
        }
    }
}

// radioCrystals([1375, 50000]);
// radioCrystals([1000, 4000, 8100]);