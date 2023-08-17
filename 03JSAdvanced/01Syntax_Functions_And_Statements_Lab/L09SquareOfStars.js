function squareOfStars(input) {

    let parameter = 5;

    if ((typeof input) === 'number') {
        parameter = input;
    }

    let row = Array.from({ length: parameter })
        .fill('*', 0, parameter)
        .join(' ');

    for (let i = 1; i <= parameter; i++) {
        console.log(row);
    }

}

// squareOfStars(1);
// squareOfStars(2);
// squareOfStars(5);
// squareOfStars(7);