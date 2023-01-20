function cinema(input) {
    let screeningType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let ticketPrice = 0;

    switch (screeningType) {
        case "Premiere":
            ticketPrice = 12.00;
            break;
        case "Normal":
            ticketPrice = 7.50;
            break;
        case "Discount":
            ticketPrice = 5.00;
            break;
    }

    let totalSits = rows * cols;
    let totalPrice = totalSits * ticketPrice;

    console.log(totalPrice.toFixed(2) + " leva");
}

// cinema(["Premiere", "10", "12"]);
// cinema(["Normal", "21", "13"]);
// cinema(["Discount", "12", "30"]);