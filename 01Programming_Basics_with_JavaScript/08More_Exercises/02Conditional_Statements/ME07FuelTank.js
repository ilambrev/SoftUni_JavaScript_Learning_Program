function fuelTank(fuel, quantity) {
    if (fuel == 'Diesel' || fuel == 'Gasoline' || fuel == 'Gas') {
        if (quantity < 25) {
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
        } else {
            console.log(`You have enough ${fuel.toLowerCase()}.`);
        }
    } else {
        console.log('Invalid fuel!');
    }
}

// fuelTank('Diesel', 10);
// fuelTank('Gasoline', 40);
// fuelTank('Gas', 25);
// fuelTank('Kerosene', 200);