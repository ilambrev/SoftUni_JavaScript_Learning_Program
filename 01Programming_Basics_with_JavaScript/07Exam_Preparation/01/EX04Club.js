function club(input) {

    let profitTarget = Number(input[0]);
    let cocktailName = input[1];
    let index = 1;
    let profit = 0;

    while (cocktailName !== "Party!") {
        index++;

        let cocktailsNumber = Number(input[index]);
        let cocktailPrice = cocktailName.length;

        orderPrice = cocktailsNumber * cocktailPrice;

        if (orderPrice % 2 !== 0) {
            orderPrice *= 0.75;
        }

        profit += orderPrice;

        if (profit >= profitTarget) {
            break;
        }

        index++;
        cocktailName = input[index];

    }

    let result = profit - profitTarget;

    if (result >= 0) {
        console.log("Target acquired.");
    } else {
        console.log(`We need ${Math.abs(result).toFixed(2)} leva more.`)
    }

    console.log(`Club income - ${profit.toFixed(2)} leva.`);

}

// club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
// club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);