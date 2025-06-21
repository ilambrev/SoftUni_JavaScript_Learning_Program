function carToGo(budget, season) {
    let carClass = '';
    let carType = '';
    let price = 0;

    if (budget <= 100) {
        carClass = 'Economy class';
        if (season == 'Summer') {
            carType = 'Cabrio';
            price = budget * 0.35;
        } else if (season == 'Winter') {
            carType = 'Jeep';
            price = budget * 0.65;
        }
    } else if (budget <= 500) {
        carClass = 'Compact class';
        if (season == 'Summer') {
            carType = 'Cabrio';
            price = budget * 0.45;
        } else if (season == 'Winter') {
            carType = 'Jeep';
            price = budget * 0.8;
        }
    } else {
        carClass = 'Luxury class';
        carType = 'Jeep';
        price = budget * 0.9;

    }

    console.log(carClass);
    console.log(`${carType} - ${price.toFixed(2)}`);
}

// carToGo(450, 'Summer');
// carToGo(450, 'Winter');
// carToGo(99.99, 'Summer');
// carToGo(70.50, 'Winter');
// carToGo(1010, 'Summer');
// carToGo(1010, 'Winter');