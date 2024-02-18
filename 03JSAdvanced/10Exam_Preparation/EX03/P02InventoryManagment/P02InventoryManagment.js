class InventoryManager {

    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        const item = this.items.find(i => i.itemName === itemName);

        if (this.items.length === this.capacity && item === undefined) {
            throw new Error('The inventory is already full.');
        }

        if (item !== undefined) {
            item.quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });
        }

        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        const item = this.items.find(i => i.itemName === itemName);

        if (item === undefined) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }

        if (quantity > item.quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }

        item.quantity -= quantity;

        if (item.quantity === 0) {
            const itemIndex = this.items.findIndex(i => i.itemName === itemName);

            this.outOfStock.push(item);
            this.items.splice(itemIndex, 1);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        const item = this.items.find(i => i.itemName === itemName);

        if (item !== undefined) {
            item.quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });

            const itemIndex = this.outOfStock.findIndex(i => i.itemName === itemName);

            if (itemIndex > -1) {
                this.outOfStock.splice(itemIndex, 1);
            }
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary() {
        const itemsSummary = `Current Inventory:\n${this.items.map(i => `${i.itemName}: ${i.quantity}`).join('\n')}`;

        return this.outOfStock.length > 0 ? itemsSummary + `\nOut of Stock: ${this.outOfStock.map(i => i.itemName).join(', ')}` : itemsSummary;
    }
}

// Input 1
// const manager = new InventoryManager(2);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Level", 3));

// Input 2
// const manager = new InventoryManager(3);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.sellItem("Paintbrush", 2));

// Input 3
// const manager = new InventoryManager(3);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.restockItem("Drill", 5));
// console.log(manager.restockItem("Paintbrush", 1));

// Input 4
// const manager = new InventoryManager(3);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.sellItem("Hammer", 5));
// console.log(manager.restockItem("Drill", 5));
// console.log(manager.restockItem("Paintbrush", 1));
// console.log(manager.getInventorySummary());