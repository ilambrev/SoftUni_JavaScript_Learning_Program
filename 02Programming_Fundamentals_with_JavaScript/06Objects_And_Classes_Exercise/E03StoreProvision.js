function storeProvision(stockArr, orderedProductsArr) {

    let products = [];

    for (let i = 0; i < stockArr.length; i += 2) {

        let productName = stockArr[i];
        let quantity = Number(stockArr[i + 1]);

        let product = {
            name: productName,
            quantity: quantity,
        }

        products.push(product);

    }

    for (let i = 0; i < orderedProductsArr.length; i += 2) {

        let productName = orderedProductsArr[i];
        let quantity = Number(orderedProductsArr[i + 1]);

        let product = {
            name: productName,
            quantity: quantity,
        }

        if (products.filter(p => p.name === product.name).length > 0) {

            let productIndex = products.findIndex(p => p.name === product.name);

            products[productIndex].quantity += product.quantity;

        } else {

            products.push(product);

        }

    }

    products.forEach(p => console.log(`${p.name} -> ${p.quantity}`));

}

// storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//     ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
// storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
//     ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);