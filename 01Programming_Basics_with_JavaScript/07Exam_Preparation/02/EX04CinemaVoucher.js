function cinemaVoucher(input) {

    let vaucherValue = Number(input[0]);
    let purchase = input[1];
    let index = 1;
    let freeFunds = vaucherValue;
    let ticketsCounter = 0;
    let otherPurchaseCounter = 0;

    while (purchase !== "End") {

        let purchaseLength = purchase.length;
        let purchasePrice = purchase.charCodeAt(0);

        if (purchaseLength > 8) {
            purchasePrice += purchase.charCodeAt(1);
            ticketsCounter++;
        } else {
            otherPurchaseCounter++;
        }

        if (freeFunds - purchasePrice < 0) {
            if (purchaseLength > 8) {
                ticketsCounter--;
            } else {
                otherPurchaseCounter--;
            }

            break;
        }

        freeFunds -= purchasePrice;

        if (freeFunds === 0) {
            break;
        }

        index++;
        purchase = input[index];

    }

    console.log(`${ticketsCounter}`);
    console.log(`${otherPurchaseCounter}`);

}

// cinemaVoucher(["300", "Captain Marvel", "popcorn", "Pepsi"]);
// cinemaVoucher(["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"]);