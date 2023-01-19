function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let productQantity = Number(input[2]);

    let price = 0;

    if (town == "Sofia") {
        if (product == "coffee") {
            price = productQantity * 0.50;
        } else if (product == "water") {
            price = productQantity * 0.80;
        } else if (product == "beer") {
            price = productQantity * 1.20;
        } else if (product == "sweets") {
            price = productQantity * 1.45;
        } else if (product == "peanuts") {
            price = productQantity * 1.60;
        }
    } else if (town == "Plovdiv") {
        if (product == "coffee") {
            price = productQantity * 0.40;
        } else if (product == "water") {
            price = productQantity * 0.70;
        } else if (product == "beer") {
            price = productQantity * 1.15;
        } else if (product == "sweets") {
            price = productQantity * 1.30;
        } else if (product == "peanuts") {
            price = productQantity * 1.50;
        }
    } else if (town == "Varna") {
        if (product == "coffee") {
            price = productQantity * 0.45;
        } else if (product == "water") {
            price = productQantity * 0.70;
        } else if (product == "beer") {
            price = productQantity * 1.10;
        } else if (product == "sweets") {
            price = productQantity * 1.35;
        } else if (product == "peanuts") {
            price = productQantity * 1.55;
        }
    }

    console.log(price);
}

// smallShop(["coffee", "Varna", "2"]);
// smallShop(["peanuts", "Plovdiv", "1"]);
// smallShop(["beer", "Sofia", "2"]);
// smallShop(["water", "Plovdiv", "2"]);
// smallShop(["sweets", "Sofia", "2.23"]);