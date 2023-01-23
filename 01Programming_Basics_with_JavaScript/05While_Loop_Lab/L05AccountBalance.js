function accountBalance(input) {

    let deposit = input[0];
    let balance = 0;
    let index = 0;

    while (deposit !== "NoMoreMoney") {
        let depositValue = Number(deposit);

        if (depositValue < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            balance += depositValue;
            console.log(`Increase: ${depositValue.toFixed(2)}`);
        }

        index++;
        deposit = input[index];
    }

    console.log(`Total: ${balance.toFixed(2)}`)
}

// accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
// accountBalance(["120", "45.55", "-150"]);