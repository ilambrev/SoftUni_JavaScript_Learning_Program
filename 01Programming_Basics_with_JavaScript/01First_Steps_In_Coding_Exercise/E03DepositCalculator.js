function despositCalculator(input) {
    let deposit = Number(input[0]);
    let termInMonths = Number(input[1]);
    let annualInterestRate = Number(input[2]) / 100;
    let finalSum = deposit + termInMonths * ((deposit * annualInterestRate) / 12);

    console.log(finalSum);
}

// despositCalculator(["200", "3", "5.7"]);
// despositCalculator(["2350", "6", "7"]);