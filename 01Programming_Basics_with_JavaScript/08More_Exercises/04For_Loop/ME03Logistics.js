function logistics(input) {
    const numberOfLoads = input[0];
    let byBus = 0;
    let byLorry = 0;
    let byTrain = 0;

    for (let i = 1; i <= numberOfLoads; i++) {
        const load = Number(input[i]);

        if (load <= 3) {
            byBus += load;
        } else if (load > 3 && load <= 11) {
            byLorry += load;
        } else {
            byTrain += load;
        }
    }

    const totalWeight = byBus + byLorry + byTrain;
    const totalPrice = byBus * 200 + byLorry * 175 + byTrain * 120;

    console.log((totalPrice / totalWeight).toFixed(2));
    console.log(((byBus / totalWeight) * 100).toFixed(2) + '%');
    console.log(((byLorry / totalWeight) * 100).toFixed(2) + '%');
    console.log(((byTrain / totalWeight) * 100).toFixed(2) + '%');
}

// logistics(['4', '1', '5', '16', '3']);
// logistics((['5', '2', '10', '20', '1', '7']));