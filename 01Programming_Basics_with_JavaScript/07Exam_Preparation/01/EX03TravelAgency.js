function travelAgency(input) {

    let town = input[0];
    let packetType = input[1];
    let vipDiscount = input[2];
    let daysOfStay = Number(input[3]);

    let isInputValid = true;
    let pricePerDay = 0;
    let discount = 0;
    let totalPrice = 0;

    if (daysOfStay <= 0) {
        console.log("Days must be positive number!");
        isInputValid = false;
    }

    if (isInputValid) {
        switch (town) {
            case "Bansko":
            case "Borovets":
                switch (packetType) {
                    case "withEquipment":
                        pricePerDay = 100.00;
                        discount = 10;
                        break;
                    case "noEquipment":
                        pricePerDay = 80.00;
                        discount = 5;
                        break;
                    default:
                        console.log("Invalid input!");
                        isInputValid = false;
                        break;
                }
                break;
            case "Varna":
            case "Burgas":
                switch (packetType) {
                    case "withBreakfast":
                        pricePerDay = 130.00;
                        discount = 12;
                        break;
                    case "noBreakfast":
                        pricePerDay = 100.00;
                        discount = 7;
                        break;
                    default:
                        console.log("Invalid input!");
                        isInputValid = false;
                        break;
                }
                break;
            default:
                console.log("Invalid input!");
                isInputValid = false;
                break;
        }
    }

    if (isInputValid) {

        if (daysOfStay > 7) {
            totalPrice = (daysOfStay - 1) * pricePerDay;
        } else {
            totalPrice = daysOfStay * pricePerDay;
        }

        if (vipDiscount === "yes") {
            totalPrice *= 1 - discount / 100;
        }

        console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
    }

}

// travelAgency(["Borovets", "noEquipment", "yes", "6"]);
// travelAgency(["Bansko", "withEquipment", "no", "2"]);
// travelAgency(["Varna", "withBreakfast", "yes", "5"]);
// travelAgency(["Burgas", "noBreakfast", "no", "4"]);
// travelAgency(["Varna", "withBreakfast", "no", "0"]);
// travelAgency(["Gabrovo", "noBreakfast", "no", "3"]);