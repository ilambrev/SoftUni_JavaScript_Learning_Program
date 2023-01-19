function fruitShop(input) {
    let product = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let isInputValid = true;

    let productPrice = 0.00;


    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        switch (product) {
            case "banana":
                productPrice = 2.50;
                break;
            case "apple":
                productPrice = 1.20;
                break;
            case "orange":
                productPrice = 0.85;
                break;
            case "grapefruit":
                productPrice = 1.45;
                break;
            case "kiwi":
                productPrice = 2.70;
                break;
            case "pineapple":
                productPrice = 5.50;
                break;
            case "grapes":
                productPrice = 3.85;
                break;
            default:
                isInputValid = false;
                break;
        }
    } else if (day == "Saturday" || day == "Sunday") {
        switch (product) {
            case "banana":
                productPrice = 2.70;
                break;
            case "apple":
                productPrice = 1.25;
                break;
            case "orange":
                productPrice = 0.90;
                break;
            case "grapefruit":
                productPrice = 1.60;
                break;
            case "kiwi":
                productPrice = 3.00;
                break;
            case "pineapple":
                productPrice = 5.60;
                break;
            case "grapes":
                productPrice = 4.20;
                break;
            default:
                isInputValid = false;
                break;
        }
    } else {
        isInputValid = false;
    }

    if (isInputValid) {
        let totalPrice = productPrice * quantity;
        console.log(totalPrice.toFixed(2));
    } else {
        console.log("error");
    }
}

// fruitShop(["apple", "Tuesday", "2"]);
// fruitShop(["orange", "Sunday", "3"]);
// fruitShop(["kiwi", "Monday", "2.5"]);
// fruitShop(["grapes", "Saturday", "0.5"]);
// fruitShop(["tomato", "Monday", "0.5"]);