function bikeRace(juniors, seniors, group) {
    let juniorFee = 0;
    let seniorFee = 0;

    switch (group) {
        case 'trail':
            juniorFee = 5.5;
            seniorFee = 7;
            break;
        case 'cross-country':
            const participants = juniors + seniors;
            juniorFee = participants >= 50 ? 8 * 0.75 : 8;
            seniorFee = participants >= 50 ? 9.5 * 0.75 : 9.5;
            break;
        case 'downhill':
            juniorFee = 12.25;
            seniorFee = 13.75;
            break;
        case 'road':
            juniorFee = 20;
            seniorFee = 21.50;
            break;
    }

    const amountDonated = (juniorFee * juniors + seniorFee * seniors) * 0.95;

    console.log(amountDonated.toFixed(2));
}

// bikeRace(10, 20, 'trail');
// bikeRace(21, 26, 'cross-country');
// bikeRace(30, 25, 'cross-country');
// bikeRace(10, 10, 'downhill');
// bikeRace(3, 40, 'road');