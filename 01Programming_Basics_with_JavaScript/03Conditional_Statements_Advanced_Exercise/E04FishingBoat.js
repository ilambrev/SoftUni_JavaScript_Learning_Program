function fishingBoat(input) {
    const priceAtSpring = 3000.00;
    const priceAtSummerAndAutumn = 4200.00;
    const priceAtWinter = 2600.00;

    let budget = Number(input[0]);
    let season = input[1];
    let fishermansNumber = Number(input[2]);

    let isFishermansNumberEven = fishermansNumber % 2 === 0;

    let finalPrice = 0;

    switch (season) {
        case "Spring":
            finalPrice = priceAtSpring;
            break;
        case "Summer":
        case "Autumn":
            finalPrice = priceAtSummerAndAutumn;
            break;
        case "Winter":
            finalPrice = priceAtWinter;
            break;
    }

    let discount = 0;

    if (fishermansNumber <= 6) {
        discount = 0.10;
    } else if (fishermansNumber <= 11) {
        discount = 0.15;
    } else {
        discount = 0.25;
    }

    finalPrice -= finalPrice * discount;

    if (isFishermansNumberEven && season !== "Autumn") {
        finalPrice -= finalPrice * 0.05;
    }

    let balance = budget - finalPrice;

    if (balance >= 0) {
        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(balance).toFixed(2)} leva.`);
    }

}

// fishingBoat(["3000", "Summer", "11"]);
// fishingBoat(["3600", "Autumn", "6"]);
// fishingBoat(["2000", "Winter", "13"]);