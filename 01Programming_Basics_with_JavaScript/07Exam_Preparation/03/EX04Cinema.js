function cinema(input) {

    const ticketPrice = 5.00;
    let hallCapacity = Number(input[0]);
    let data = input[1];
    let index = 1;

    let visitorstNumber = 0;
    let totalIncomes = 0;
    let isCinemaFull = false;

    while (data !== "Movie time!") {

        let currentVisitors = Number(data);

        isCinemaFull = visitorstNumber + currentVisitors > hallCapacity;

        if (isCinemaFull) {
            break;
        }

        visitorstNumber += currentVisitors;

        let priceForCurrentVisitors = currentVisitors * ticketPrice;

        if (currentVisitors % 3 === 0) {
            priceForCurrentVisitors -= 5;
        }

        totalIncomes += priceForCurrentVisitors;

        index++;
        data = input[index];

    }

    if (isCinemaFull) {
        console.log("The cinema is full.");
    } else {
        console.log(`There are ${hallCapacity - visitorstNumber} seats left in the cinema.`);
    }

    console.log(`Cinema income - ${totalIncomes} lv.`);

}

// cinema(["60", "10", "6", "3", "20", "15", "Movie time!"]);
// cinema(["50", "15", "10", "10", "15", "5"]);
// cinema(["100", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "Movie time!"]);