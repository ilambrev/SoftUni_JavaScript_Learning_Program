function dishwasher(input) {
    const detergentBottleVolume = 750;
    const detergentForDish = 5;
    const detergentForPot = 15;
    let detergentAmount = Number(input[0]) * detergentBottleVolume;
    let counter = 1;
    let dishes = 0;
    let pots = 0;

    while (input[counter] != 'End' && counter < input.length) {
        if (counter % 3 == 0) {
            detergentAmount -= Number(input[counter]) * detergentForPot;
            pots += Number(input[counter]);
        } else {
            detergentAmount -= Number(input[counter]) * detergentForDish;
            dishes += Number(input[counter]);
        }

        counter++;
    }

    if (detergentAmount < 0) {
        console.log(`Not enough detergent, ${Math.abs(detergentAmount)} ml. more necessary!`);
    } else {
        console.log('Detergent was enough!');
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detergentAmount} ml.`);
    }
}

// dishwasher(['2', '53', '65', '55', 'End']);
// dishwasher(['1', '10', '15', '10', '12', '13', '30']);