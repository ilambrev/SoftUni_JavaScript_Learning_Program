function listOfProducts(products) {

    let sortedProducts = products.sort();

    for (let i = 1; i <= sortedProducts.length; i++) {

        console.log(`${i}.${sortedProducts[i - 1]}`);

    }

}

// listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
// listOfProducts(['Watermelon', 'Banana', 'Apples']);