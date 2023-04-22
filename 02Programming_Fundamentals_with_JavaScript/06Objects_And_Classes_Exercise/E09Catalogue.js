function catalogue(input) {

    class Product {

        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }

    let products = [];

    for (let line of input) {

        let [name, price] = line.split(' : ');
        price = Number(price);

        let product = new Product(name, price);

        products.push(product);

    }

    products.sort((p1, p2) => p1.name.localeCompare(p2.name));

    let letter = '';

    for (let product of products) {

        if (product.name.charAt(0) !== letter) {

            letter = product.name.charAt(0);
            console.log(letter);

        }

        console.log(`  ${product.name}: ${product.price}`);

    }

}

// catalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
// catalogue(['Omlet : 5.4', 'Shirt : 15', 'Cake : 59']);