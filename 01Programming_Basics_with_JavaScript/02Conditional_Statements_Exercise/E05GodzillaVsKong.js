function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let extrasNumber = Number(input[1]);
    let clothingPrice = Number(input[2]);

    let decorPrice = movieBudget * 0.10;

    if (extrasNumber > 150) {
        clothingPrice -= clothingPrice * 0.10;
    }

    let totaExpenses = decorPrice + extrasNumber * clothingPrice;

    if (totaExpenses > movieBudget) {
        let lackOfMoney = totaExpenses - movieBudget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${lackOfMoney.toFixed(2)} leva more.`);
    } else {
        let moneyLeft = movieBudget - totaExpenses;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}

// godzillaVsKong(["20000", "120", "55.5"]);
// godzillaVsKong(["15437.62", "186", "57.99"]);
// godzillaVsKong(["9587.88", "222", "55.68"]);