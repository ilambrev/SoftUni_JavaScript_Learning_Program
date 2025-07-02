function fuelTankPart2(fuel, quantity, discount) {
    const gasolinePrice = 2.22;
    const dieselPrice = 2.33;
    const gasPrice = 0.93;
    const gasolinePriceDiscount = 0.18;
    const dieselPriceDiscount = 0.12;
    const gasPriceDiscount = 0.08;
    const quantityDiscount = quantity >= 20 && quantity <= 25 ? 0.92 : quantity > 25 ? 0.9 : 1;
    let totalPrice = 0;

    if (fuel == 'Gasoline') {
        totalPrice = (quantity * (gasolinePrice - (discount == 'Yes' ? gasolinePriceDiscount : 0))) * quantityDiscount;
    } else if (fuel == 'Diesel') {
        totalPrice = (quantity * (dieselPrice - (discount == 'Yes' ? dieselPriceDiscount : 0))) * quantityDiscount;
    } else if (fuel == 'Gas') {
        totalPrice = (quantity * (gasPrice - (discount == 'Yes' ? gasPriceDiscount : 0))) * quantityDiscount;
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);
}

// fuelTankPart2('Gas', 30, 'Yes');
// fuelTankPart2('Gasoline', 25, 'No');
// fuelTankPart2('Diesel', 19, 'No');