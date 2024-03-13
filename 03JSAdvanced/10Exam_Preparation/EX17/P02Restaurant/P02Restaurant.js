class Restaurant {

    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = []
    }

    loadProducts(products) {
        let actionRecord = [];

        for (let productData of products) {
            let [productName, productQuantity, productTotalPrice] = productData.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {

                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = 0;
                }

                this.stockProducts[productName] += productQuantity;

                this.budgetMoney -= productTotalPrice;

                actionRecord.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                actionRecord.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        this.history.push(...actionRecord);

        return actionRecord.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        const products = neededProducts.reduce((acc, curr) => {
            let [productName, productQuantity] = curr.split(' ');
            productQuantity = Number(productQuantity);

            acc.push({ productName, productQuantity });

            return acc;
        }, []);

        this.menu[meal] = { neededProducts: products, price };

        const numberOfMeals = Object.keys(this.menu).length;

        return `Great idea! Now with the ${meal} we have ${numberOfMeals} ${(numberOfMeals ===  1) ? 'meal' : 'meals'} in the menu, other ideas?`;
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        }

        return `${Object.entries(this.menu).map(([k, v]) => `${k} - $ ${v.price}`).join('\n')}`;
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        const mealIngredients = this.menu[meal].neededProducts;

        let areProductsAvailable = true;

        for (let product of mealIngredients) {
            if (!this.stockProducts.hasOwnProperty(product.productName) || this.stockProducts[product.productName] < product.productQuantity) {
                areProductsAvailable = false;
                break;
            }
        }

        if (!areProductsAvailable) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        for (let product of mealIngredients) {
            this.stockProducts[product.productName] -= product.productQuantity;
        }

        this.budgetMoney += this.menu[meal].price;

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}

// Input 1
// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 550']));

// Input 2
// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// Input 3
// let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());

// Input 4
// let kitchen = new Restaurant(1000);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55);
// console.log(kitchen.showTheMenu());

// Input 5
// let kitchen = new Restaurant(1000);
// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));