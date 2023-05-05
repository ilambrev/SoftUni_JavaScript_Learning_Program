function piccolo(input) {

    let cars = new Set();

    for (let line of input) {

        let [action, carPlate] = line.split(', ');

        if (action === 'IN') {

            cars.add(carPlate);

        } else if (action === 'OUT') {

            cars.delete(carPlate);

        }

    }

    cars.size > 0 ? console.log(Array.from(cars).sort().join('\n')) : console.log(`Parking Lot is Empty`);

}

// piccolo([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU'
// ]);
// piccolo([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA'
// ]);