function poolDay(input) {

    let peopleNumber = Number(input[0]);
    let entranceFee = Number(input[1]);
    let sunLongerFee = Number(input[2]);
    let umbrellaFee = Number(input[3]);

    let totalExpenses = peopleNumber * entranceFee +
        sunLongerFee * Math.ceil(peopleNumber * 0.75) +
        umbrellaFee * Math.ceil(peopleNumber / 2);

    console.log(`${totalExpenses.toFixed(2)} lv.`);

}

// poolDay(["21", "5.50", "4.40", "6.20"]);
// poolDay(["50", "6", "8", "4"]);
// poolDay(["100", "8", "6", "4"]);