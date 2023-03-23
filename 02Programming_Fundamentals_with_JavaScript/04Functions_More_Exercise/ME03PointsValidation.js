function pointsValidation(coordinates) {

    let x1 = coordinates[0];
    let y1 = coordinates[1];
    let x2 = coordinates[2];
    let y2 = coordinates[3];

    let checkIfDistanceValid = function (x1, y1, x2, y2) {

        let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

        return distance % 1 === 0 ? 'valid' : 'invalid';

    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${checkIfDistanceValid(x1, y1, 0, 0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${checkIfDistanceValid(x2, y2, 0, 0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${checkIfDistanceValid(x1, y1, x2, y2)}`);

}

// pointsValidation([3, 0, 0, 4]);
// pointsValidation([2, 1, 1, 1]);