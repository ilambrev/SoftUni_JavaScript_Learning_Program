function juiceFlavors(input) {
    const quantityForBottle = 1000;
    const flavors = {};
    const produsedBottles = new Map();

    for (let line of input) {
        let [flavor, quantity] = line.split(' => ');
        quantity = Number(quantity);

        let qurrentQuantity = 0;

        if (flavors.hasOwnProperty(flavor)) {
            qurrentQuantity = flavors[flavor] + quantity;
        } else {
            qurrentQuantity = quantity;
        }

        let bottles = qurrentQuantity >= quantityForBottle ? Math.trunc(qurrentQuantity / quantityForBottle) : 0;

        flavors[flavor] = qurrentQuantity - (bottles * quantityForBottle);

        if (bottles > 0) {
            if (!produsedBottles.has(flavor)) {
                produsedBottles.set(flavor, 0);
            }

            let newBottlesQuantity = produsedBottles.get(flavor) + bottles;

            produsedBottles.set(flavor, newBottlesQuantity);
        }

    }

    for (let [key, value] of produsedBottles) {
        console.log(`${key} => ${value}`);
    }
}

// juiceFlavors([
//     'Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549'
// ]);

// juiceFlavors([
//     'Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//     'Pear => 5678',
//     'Watermelon => 6789'
// ]);