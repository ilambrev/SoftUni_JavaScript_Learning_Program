function traveling(input) {

    let destination = input[0];
    let targetBudget = Number(input[1]);
    let moneySaved = 0;
    let index = 1;

    while (destination !== "End") {

        index++;

        if (isNaN(input[index])) {
            destination = input[index];
            index++;
            targetBudget = Number(input[index]);
            moneySaved = 0;
            continue;
        }

        moneySaved += Number(input[index]);

        if (moneySaved >= targetBudget) {
            console.log(`Going to ${destination}!`);
            moneySaved = 0;
        }

    }
}

// traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);
// traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);