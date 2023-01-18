function shopping(input) {
    const videocardPrice = 250.00;

    let budget = Number(input[0]);
    let videocardsNumber = Number(input[1]);
    let processorsNumber = Number(input[2]);
    let ramNumber = Number(input[3]);

    let videocardsTotalPrice = videocardsNumber * videocardPrice;

    const processorPrice = videocardsTotalPrice * 0.35;
    const ramPrice = videocardsTotalPrice * 0.10;

    let totalPrice = videocardsTotalPrice + processorsNumber * processorPrice + ramNumber * ramPrice;

    if (videocardsNumber > processorsNumber) {
        totalPrice -= totalPrice * 0.15;
    }

    if (totalPrice <= budget) {
        let budgetRemainder = budget - totalPrice;
        console.log(`You have ${budgetRemainder.toFixed(2)} leva left!`);
    } else {
        let budgetLack = totalPrice - budget;
        console.log(`Not enough money! You need ${budgetLack.toFixed(2)} leva more!`);
    }

}

// shopping(["900", "2", "1", "3"]);
// shopping(["920.45", "3", "1", "1"]);