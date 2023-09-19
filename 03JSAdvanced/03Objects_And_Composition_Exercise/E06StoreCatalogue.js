function storageCatalogue(input) {

    const products = input.reduce((acc, curr) => {

        const [name, price] = curr.split(' : ');

        acc.push({ name, price: Number(price) });

        return acc;

    }, []);

    products.sort((p1, p2) => p1.name.localeCompare(p2.name));

    let letter = '';

    for (let product of products) {

        const firstChar = product.name.charAt(0);

        if (firstChar !== letter) {

            letter = firstChar;

            console.log(letter);

        }

        console.log(`  ${product.name}: ${product.price}`);

    }

}

/*
storageCatalogue([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"
]);
storageCatalogue([
    "Banana : 2",
    "Rubic's Cube : 5",
    "Raspberry P : 4999",
    "Rolex : 100000",
    "Rollon : 10",
    "Rali Car : 2000000",
    "Pesho : 0.000001",
    "Barrel : 10"
]);
*/