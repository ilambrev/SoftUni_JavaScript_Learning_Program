function toyShop(input) {
    const puzzlePrice = 2.60;
    const talkingDollPrice = 3.00;
    const teddyPrice = 4.10;
    const minionPrice = 8.20;
    const truckPrice = 2.00;

    let tripPrice = Number(input[0]);
    let puzzlesQuantity = Number(input[1]);
    let talkingDollsQuantity = Number(input[2]);
    let teddiesQuantity = Number(input[3]);
    let minionsQuantity = Number(input[4]);
    let trucksQuantity = Number(input[5]);

    let toysTotalQuantity = puzzlesQuantity + talkingDollsQuantity + teddiesQuantity + minionsQuantity + trucksQuantity;

    let totalOrderPrice = puzzlesQuantity * puzzlePrice +
        talkingDollsQuantity * talkingDollPrice +
        teddiesQuantity * teddyPrice +
        minionsQuantity * minionPrice +
        trucksQuantity * truckPrice;

    if (toysTotalQuantity >= 50) {
        totalOrderPrice -= totalOrderPrice * 0.25;
    }

    let totalMoneyInCache = totalOrderPrice - totalOrderPrice * 0.10;

    if (totalMoneyInCache >= tripPrice) {
        let moneyLeft = totalMoneyInCache - tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let lackOfMoney = tripPrice - totalMoneyInCache;
        console.log(`Not enough money! ${lackOfMoney.toFixed(2)} lv needed.`);
    }

}

// toyShop(["40.8", "20", "25", "30", "50", "10"]);
// toyShop(["320", "8", "2", "5", "5", "1"]);