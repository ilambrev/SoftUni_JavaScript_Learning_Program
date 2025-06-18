function reportSystem(input) {
    const targetValue = Number(input[0]);
    let counter = 1;
    let sumWithCash = 0;
    let sumWithCard = 0;
    let successfulPaymentsWithCashe = 0;
    let successfulPaymentsWithCard = 0;

    while (input[counter] != 'End' && counter < input.length) {
        const currentPrice = Number(input[counter]);
        if (counter % 2 == 0) {
            if (currentPrice >= 10) {
                sumWithCard += currentPrice;
                console.log('Product sold!');
                successfulPaymentsWithCard++;
            } else {
                console.log('Error in transaction!');
            }
        } else {
            if (currentPrice <= 100) {
                sumWithCash += currentPrice;
                console.log('Product sold!');
                successfulPaymentsWithCashe++;
            } else {
                console.log('Error in transaction!');
            }
        }

        if (sumWithCash + sumWithCard >= targetValue) {
            break;
        }

        counter++;
    }

    if (sumWithCash + sumWithCard >= targetValue) {
        console.log(`Average CS: ${(sumWithCash / successfulPaymentsWithCashe).toFixed(2)}`);
        console.log(`Average CC: ${(sumWithCard / successfulPaymentsWithCard).toFixed(2)}`);
    } else {
        console.log('Failed to collect required money for charity.');
    }
}

// reportSystem(['500', '120', '8', '63', '256', '78', '317']);
// reportSystem(['600', '86', '150', '98', '227', 'End']);