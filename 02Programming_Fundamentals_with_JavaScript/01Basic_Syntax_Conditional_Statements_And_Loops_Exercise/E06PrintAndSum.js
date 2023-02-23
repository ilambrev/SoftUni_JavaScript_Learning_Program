function printAndSum(startNumber, endNumber) {

    let series = '';
    let sum = 0;

    for (let i = startNumber; i <= endNumber; i++) {

        if (i < endNumber) {
            series += i + ' ';
        } else {
            series += i;
        }

        sum += i;

    }

    console.log(series);
    console.log(`Sum: ${sum}`);

}

// printAndSum(5, 10);
// printAndSum(0, 26);
// printAndSum(50, 60);