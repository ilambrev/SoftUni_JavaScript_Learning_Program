class OnlineShop {
    availableWarehouseSpace;

    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
        this.availableWarehouseSpace = warehouseSpace;
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.availableWarehouseSpace < spaceRequired) {
            throw new Error('Not enough space in the warehouse.');
        }

        this.products.push({ product, quantity });

        this.availableWarehouseSpace -= spaceRequired;

        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        const selectedProduct = this.products.find(p => p.product === product);

        if (selectedProduct === undefined) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        if (minimalQuantity <= selectedProduct.quantity) {
            return `You have enough from product ${product}.`;
        } else {
            const difference = minimalQuantity - selectedProduct.quantity;

            selectedProduct.quantity = minimalQuantity;

            return `You added ${difference} more from the ${product} products.`;
        }
    }

    sellProduct(product) {
        const selectedProduct = this.products.find(p => p.product === product);

        if (selectedProduct === undefined) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        selectedProduct.quantity -= 1;

        this.sales.push({ product: selectedProduct.product, quantity: 1 });

        return `The ${product} has been successfully sold.`;
    }

    revision() {
        if (this.sales.length === 0) {
            throw new Error('There are no sales today!');
        }

        const sales = `You sold ${this.sales.length} products today!`;
        const productsLeft = `Products in the warehouse:\n${this.products
            .map(p => `${p.product}-${p.quantity} more left`).join('\n')}`;

        return `${sales}\n${productsLeft}`;
    }
}

// Input 1
// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));

// Input 2
// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));

// Input 3
// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));

// Input 4
// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.revision());