function petShop(input) {

    let dogFoodPacks = Number(input[0]);
    let catFoodPacks = Number(input[1]);

    let foodPrice = dogFoodPacks * 2.50 + catFoodPacks * 4.00;

    console.log(`${foodPrice} lv.`);

}

// petShop(["5", "4"]);
// petShop(["13", "9"]);