function foodDelivery(input) {
    const chickenMenuPrice = 10.35;
    const fishMenuPrice = 12.40;
    const veganMenuPrice = 8.15;
    const deliveryPrice = 2.50;

    let numberOfChickenMenu = Number(input[0]);
    let numberOfFishMenu = Number(input[1]);
    let numberOfVeganMenu = Number(input[2]);

    let menusPrice = numberOfChickenMenu * chickenMenuPrice +
        numberOfFishMenu * fishMenuPrice +
        numberOfVeganMenu * veganMenuPrice;

    let dessertPrice = menusPrice * 0.2;

    let totalPrice = menusPrice + dessertPrice + deliveryPrice;

    console.log(totalPrice);
}

// foodDelivery(["2", "4", "3"]);
// foodDelivery(["9", "2", "6"]);