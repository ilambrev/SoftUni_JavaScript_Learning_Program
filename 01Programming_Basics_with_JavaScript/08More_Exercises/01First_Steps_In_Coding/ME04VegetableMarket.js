function vegetableMarket(vegetablePricePerKg, fruitPricePerKg, vegetableAmountInKg, fruitAmountInKg) {
    const EUR_TO_BGN = 1.94;

    console.log(((vegetableAmountInKg * vegetablePricePerKg + fruitAmountInKg * fruitPricePerKg) / EUR_TO_BGN).toFixed(2));
}

// vegetableMarket(0.194, 19.4, 10, 10);
// vegetableMarket(1.5, 2.5, 10, 10);