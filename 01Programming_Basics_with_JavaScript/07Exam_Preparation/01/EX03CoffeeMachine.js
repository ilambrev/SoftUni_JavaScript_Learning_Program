function coffeeMachine(input) {

    let drinkType = input[0];
    let sugarAmount = input[1];
    let drinksNumber = Number(input[2]);
    let totalSum = 0;
    let price = 0;

    switch (sugarAmount) {
        case "Without":
            switch (drinkType) {
                case "Espresso":
                    price = 0.90;
                    break;
                case "Cappuccino":
                    price = 1.00;
                    break;
                case "Tea":
                    price = 0.50;
                    break;
            }
            break;
        case "Normal":
            switch (drinkType) {
                case "Espresso":
                    price = 1.00;
                    break;
                case "Cappuccino":
                    price = 1.20;
                    break;
                case "Tea":
                    price = 0.60;
                    break;
            }
            break;
        case "Extra":
            switch (drinkType) {
                case "Espresso":
                    price = 1.20;
                    break;
                case "Cappuccino":
                    price = 1.60;
                    break;
                case "Tea":
                    price = 0.70;
                    break;
            }
            break;
    }

    totalSum = drinksNumber * price;

    if (sugarAmount === "Without") {
        totalSum *= 0.65;
    }

    if (drinkType === "Espresso" && drinksNumber >= 5) {
        totalSum *= 0.75;
    }

    if (totalSum > 15.00) {
        totalSum *= 0.8;
    }

    console.log(`You bought ${drinksNumber} cups of ${drinkType} for ${totalSum.toFixed(2)} lv.`)

}

// coffeeMachine(["Espresso", "Without", "10"]);
// coffeeMachine(["Cappuccino", "Normal", "13"]);
// coffeeMachine(["Tea", "Extra", "3"]);