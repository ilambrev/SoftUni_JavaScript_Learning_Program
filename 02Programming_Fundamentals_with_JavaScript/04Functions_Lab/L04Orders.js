function orders(product, quantity) {

    const coffeePrice = 1.50;
    const waterPrice = 1.00;
    const cokePrice = 1.40;
    const snacksPrice = 2.00;

    let totalPrice = 0;

    switch (product) {
        case 'coffee':
            totalPrice = coffeePrice;
            break;
        case 'water':
            totalPrice = waterPrice;
            break;
        case 'coke':
            totalPrice = cokePrice;
            break;
        case 'snacks':
            totalPrice = snacksPrice;
            break;

    }

    console.log((totalPrice *= quantity).toFixed(2));

}

// orders("water", 5);
// orders("coffee", 2);