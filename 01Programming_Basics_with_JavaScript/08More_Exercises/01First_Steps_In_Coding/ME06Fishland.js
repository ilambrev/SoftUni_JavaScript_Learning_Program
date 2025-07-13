function fishland(mackerelPrice, spratPrice, bonitoAmountKG, safridAmountKG, musselsAmountKG) {
    const bonitoPrice = mackerelPrice * 1.6;
    const safridPrice = spratPrice * 1.8;
    const musselsPrice = 7.5;

    const totalPrice = bonitoAmountKG * bonitoPrice + safridAmountKG * safridPrice + musselsAmountKG * musselsPrice;

    console.log(totalPrice.toFixed(2));
}

// fishland(6.90, 4.20, 1.5, 2.5, 1);
// fishland(5.55, 3.57, 4.3, 3.6, 7);
// fishland(7.79, 5.35, 9.3, 0, 0);