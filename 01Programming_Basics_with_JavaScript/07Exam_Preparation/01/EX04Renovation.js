function renovation(input) {

    let wallHeight = Number(input[0]);
    let wallWidth = Number(input[1]);
    let nonPaintableSpace = Number(input[2]);
    let index = 3;

    let areaToPaint = Math.ceil((1 - (nonPaintableSpace / 100)) * (wallHeight * wallWidth) * 4);

    while (input[index] !== "Tired!") {

        let paintQuantity = Number(input[index]);

        areaToPaint -= paintQuantity;

        if (areaToPaint <= 0) {
            break;
        }

        index++;

    }

    if (areaToPaint > 0) {
        console.log(`${areaToPaint} quadratic m left.`);
    } else if (areaToPaint === 0) {
        console.log("All walls are painted! Great job, Pesho!");
    } else {
        console.log(`All walls are painted and you have ${Math.abs(areaToPaint)} l paint left!`);
    }


}

// renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
// renovation(["2", "3", "25", "6", "7", "8"]);