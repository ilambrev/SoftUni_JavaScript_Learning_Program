function vacation(input) {

    let vacationCost = Number(input[0]);
    let availableMoney = Number(input[1]);
    let index = 2;
    let numberOfConsecutiveDaysWithExpenses = 0;
    let daysPassed = 0;

    while (availableMoney < vacationCost) {
        let action = input[index];
        let value = Number(input[index + 1]);

        if (action === "spend") {
            availableMoney -= value;
            numberOfConsecutiveDaysWithExpenses++;
        } else if (action === "save") {
            availableMoney += value;
            numberOfConsecutiveDaysWithExpenses = 0;
        }

        if (availableMoney < 0) {
            availableMoney = 0;
        }

        daysPassed++;

        if (numberOfConsecutiveDaysWithExpenses === 5) {
            break;
        }

        index += 2;

    }

    if (numberOfConsecutiveDaysWithExpenses === 5) {
        console.log("You can't save the money.");
        console.log(daysPassed);
    } else if (availableMoney >= vacationCost) {
        console.log(`You saved the money for ${daysPassed} days.`);
    }

}

// vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
// vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
// vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);