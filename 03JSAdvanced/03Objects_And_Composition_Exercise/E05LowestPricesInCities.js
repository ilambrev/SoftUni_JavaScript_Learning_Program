function lowestPricesInCities(input) {

    const productsWithLowestPrice = [];

    for (let line of input) {

        const [townName, productName, price] = line.split(' | ');

        const product = {
            name: productName,
            town: townName,
            price: Number(price),
        }

        const indexOfProduct = productsWithLowestPrice.map(p => p.name).indexOf(product.name);

        if (indexOfProduct === -1) {

            productsWithLowestPrice.push(product);

        } else if (product.price < productsWithLowestPrice[indexOfProduct].price) {

            productsWithLowestPrice[indexOfProduct] = product;

        }

    }

    productsWithLowestPrice.forEach(p => console.log(`${p.name} -> ${p.price} (${p.town})`));

}

/*
lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);
*/