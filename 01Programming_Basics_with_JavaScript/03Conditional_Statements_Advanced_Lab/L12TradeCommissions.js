function tradeCommissions(input) {
    let town = input[0];
    let salesVolume = Number(input[1]);

    let isInputValid = true;

    let persentage = 0;

    switch (town) {
        case "Sofia":
            if (salesVolume >= 0 && salesVolume <= 500) {
                persentage = 5;
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                persentage = 7;
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                persentage = 8;
            } else if (salesVolume > 10000) {
                persentage = 12;
            } else {
                isInputValid = false;
            }
            break;
        case "Varna":
            if (salesVolume >= 0 && salesVolume <= 500) {
                persentage = 4.5;
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                persentage = 7.5;
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                persentage = 10;
            } else if (salesVolume > 10000) {
                persentage = 13;
            } else {
                isInputValid = false;
            }
            break;
        case "Plovdiv":
            if (salesVolume >= 0 && salesVolume <= 500) {
                persentage = 5.5;
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                persentage = 8;
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                persentage = 12;
            } else if (salesVolume > 10000) {
                persentage = 14.5;
            } else {
                isInputValid = false;
            }
            break;
        default:
            isInputValid = false;
            break;
    }

    if (isInputValid) {
        let commission = 0.00;

        if (persentage != 0) {
            commission = salesVolume * persentage / 100;
        }

        console.log(commission.toFixed(2));
    } else {
        console.log("error");
    }
}

// tradeCommissions(["Sofia", "1500"]);
// tradeCommissions(["Plovdiv", "499.99"]);
// tradeCommissions(["Varna", "3874.50"]);
// tradeCommissions(["Kaspichan", "-50"]);