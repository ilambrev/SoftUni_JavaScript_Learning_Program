class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        const index = this.productStock.findIndex(p => p.productName === productName && p.size === size);

        if (index > -1) {
            this.productStock[index].quantity += quantity;

            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        } else {
            const newProduct = { productName, size, quantity, price };

            this.productStock.push(newProduct);

            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
    }

    sendProduct(productName, size) {
        const index = this.productStock.findIndex(p => p.productName === productName && p.size === size);

        if (index === -1) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        } else {
            this.productStock.splice(index, 1);

            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        }

    }

    findProductsBySize(size) {
        const productsOfSize = this.productStock.filter(p => p.size === size);

        if (productsOfSize.length < 1) {
            return 'There are no products available in that size';
        }

        return productsOfSize.map(p => `${p.productName}-${p.quantity} pieces`).join(', ');
    }

    listProducts() {
        if (this.productStock.length < 1) {
            return `${this.storehouse} storehouse is empty`;
        }

        return `${this.storehouse} storehouse in ${this.location} available products:\n${this.productStock
            .sort((p1, p2) => p1.productName.localeCompare(p2.productName))
            .map(p => `${p.productName}/Size:${p.size}/Quantity:${p.quantity}/Price:${p.price}$`)
            .join('\n')}`
    }

}

//Input 1
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));

//Input 2
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.sendProduct("T-Shirt", "M"));
// console.log(storeHouse.sendProduct("Sweather", "M"));

//Input 3
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.findProductsBySize("M"));
// console.log(storeHouse.findProductsBySize("XL"));

//Input 4
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
// console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
// console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
// console.log(storeHouse.listProducts());