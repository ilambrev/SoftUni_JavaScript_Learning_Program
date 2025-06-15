function bills(input) {
    const periodInMonths = Number(input[0]);
    let waterExpense = 20;
    let internetExpense = 15;
    let electricityExpense = 0;
    let otherExpenses = 0;

    for (let i = 1; i <= periodInMonths; i++) {
        const electricityExpenseForMonth = Number(input[i]);
        electricityExpense += electricityExpenseForMonth;
        otherExpenses += (waterExpense + internetExpense + electricityExpenseForMonth) * 1.2;
    }

    waterExpense *= periodInMonths;
    internetExpense *= periodInMonths;

    console.log(`Electricity: ${electricityExpense.toFixed(2)} lv`);
    console.log(`Water: ${waterExpense.toFixed(2)} lv`);
    console.log(`Internet: ${internetExpense.toFixed(2)} lv`);
    console.log(`Other: ${otherExpenses.toFixed(2)} lv`);
    console.log(`Average: ${((waterExpense + internetExpense + electricityExpense + otherExpenses) / periodInMonths).toFixed(2)} lv`);
}

// bills(['5', '68.63', '89.25', '132.53', '93.53', '63.22']);
// bills(['8', '123.54', '231.54', '140.23', '100', '122.4', '430', '178.52', '64.2']);