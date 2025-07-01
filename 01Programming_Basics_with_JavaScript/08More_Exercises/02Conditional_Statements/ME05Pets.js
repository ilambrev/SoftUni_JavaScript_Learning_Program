function pets(days, foodKG, dailyDogFoodKG, dailyCatFoodKG, dailyTurtleFoodGrams) {
    const petsConsumption = days * (dailyDogFoodKG + dailyCatFoodKG + dailyTurtleFoodGrams / 1000);

    const difference = foodKG - petsConsumption;

    if (difference >= 0) {
        console.log(`${Math.floor(difference)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(Math.abs(difference))} more kilos of food are needed.`);
    }
}

// pets(2, 10, 1, 1, 1200);
// pets(5, 10, 2.1, 0.8, 321);