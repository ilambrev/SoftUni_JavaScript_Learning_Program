function newHouse(input) {
    let flowersType = input[0];
    let flowersQuantity = Number(input[1]);
    let budget = Number(input[2]);

    let totalPrice = 0;

    switch (flowersType) {
        case "Roses":
            totalPrice = flowersQuantity * 5.00;
            if (flowersQuantity > 80) {
                totalPrice -= totalPrice * 0.10;
            }
            break;
        case "Dahlias":
            totalPrice = flowersQuantity * 3.80;
            if (flowersQuantity > 90) {
                totalPrice -= totalPrice * 0.15;
            }
            break;
        case "Tulips":
            totalPrice = flowersQuantity * 2.80;
            if (flowersQuantity > 80) {
                totalPrice -= totalPrice * 0.15;
            }
            break;
        case "Narcissus":
            totalPrice = flowersQuantity * 3.00;
            if (flowersQuantity < 120) {
                totalPrice += totalPrice * 0.15;
            }
            break;
        case "Gladiolus":
            totalPrice = flowersQuantity * 2.50;
            if (flowersQuantity < 80) {
                totalPrice += totalPrice * 0.20;
            }
            break;
    }

    let balance = budget - totalPrice;

    if (balance >= 0) {
        console.log(`Hey, you have a great garden with ${flowersQuantity} ${flowersType} and ${balance.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${Math.abs(balance).toFixed(2)} leva more.`);
    }

}

// newHouse(["Roses", "55", "250"]);
// newHouse(["Tulips", "88", "260"]);
// newHouse(["Narcissus", "119", "360"]);