class VegetableStore {

    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        const successfullyAddedVegetables = [];

        for (let vegetable of vegetables) {
            let [type, quantity, price] = vegetable.split(' ');

            quantity = Number(quantity);
            price = Number(price);

            const product = this.availableProducts.find(p => p.type === type);

            if (product === undefined) {
                this.availableProducts.push({ type, quantity, price });
            } else {
                if (price > product.price) {
                    product.price = price;
                }

                product.quantity += quantity;
            }

            const productIndex = successfullyAddedVegetables.findIndex(p => p === type);

            if (productIndex === -1) {
                successfullyAddedVegetables.push(type);
            }
        }

        return `Successfully added ${successfullyAddedVegetables.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (let selectedProduct of selectedProducts) {
            let [type, quantity] = selectedProduct.split(' ');

            quantity = Number(quantity);

            const product = this.availableProducts.find(p => p.type === type);

            if (product === undefined) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if (quantity > product.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            totalPrice += quantity * product.price;

            product.quantity -= quantity;
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        const product = this.availableProducts.find(p => p.type === type);

        if (product === undefined) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (quantity > product.quantity) {
            product.quantity = 0;

            return `The entire quantity of the ${type} has been removed.`
        } else {
            product.quantity -= quantity;

            return `Some quantity of the ${type} has been removed.`;
        }
    }

    revision() {
        const firstLine = 'Available vegetables:';
        const secondLine = `${this.availableProducts
            .sort((p1, p2) => p1.price - p2.price)
            .map(p => `${p.type}-${p.quantity}-$${p.price}`)
            .join('\n')}`;
        const thirdLine = `The owner of the store is ${this.owner}, and the location is ${this.location}.`;

        return `${firstLine}\n${secondLine}\n${thirdLine}`;
    }
}

// Input 1
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

// Input 2
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// Input 3
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

// Input 4
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
// console.log(vegStore.revision());