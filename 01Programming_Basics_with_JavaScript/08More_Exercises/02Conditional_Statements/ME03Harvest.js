function harvest(area, grapeHarvest, wineQuantity, workers) {
    const totalGrapeHarvest = area * grapeHarvest;
    const grapeForWine = totalGrapeHarvest * 0.4;
    const wineProduced = grapeForWine / 2.5;

    const difference = wineProduced - wineQuantity;

    if (difference < 0) {
        console.log(`It will be a tough winter! More ${Math.floor(Math.abs(difference))} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineProduced)} liters.`);
        console.log(`${difference} liters left -> ${Math.ceil(difference / workers)} liters per person.`)
    }
}

// harvest(650, 2, 175, 3);
// harvest(1020, 1.5, 425, 4);