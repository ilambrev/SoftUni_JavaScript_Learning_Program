function orders(product, quantity) {

    const coffeePrice = 1.50;
    const waterPrice = 1.00;
    const cokePrice = 1.40;
    const snacksPrice = 2.00;

    let calc = (productPrice, quantity) => productPrice * quantity;

    switch (product) {
        case 'coffee':
            totalPrice = calc(coffeePrice, quantity);
            break;
        case 'water':
            totalPrice = calc(waterPrice, quantity);
            break;
        case 'coke':
            totalPrice = calc(cokePrice, quantity);
            break;
        case 'snacks':
            totalPrice = calc(snacksPrice, quantity);
            break;

    }

    console.log(totalPrice.toFixed(2));

}

// orders("water", 5);
// orders("coffee", 2);