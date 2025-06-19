function averageNumber(input) {
    const numbers = Number(input[0]);
    let counter = 1;
    let numsSum = 0;

    while (counter <= numbers) {
        numsSum += Number(input[counter]);
        counter++;
    }

    console.log((numsSum / numbers).toFixed(2));
}

// averageNumber(['4', '3', '2', '4', '2']);
// averageNumber(['2', '6', '4']);
// averageNumber(['3', '82', '43', '22']);
// averageNumber(['4', '95', '23', '76', '23']);