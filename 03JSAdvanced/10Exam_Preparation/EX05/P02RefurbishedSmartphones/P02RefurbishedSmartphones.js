class RefurbishedSmartphones {
    revenue = 0

    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
    }

    addSmartphone(model, storage, price, condition) {
        const errorMessage = 'Invalid smartphone!';

        if (typeof model !== 'string' || model === '') {
            throw new Error(errorMessage);
        }

        if (!Number.isInteger(storage) || storage < 0) {
            throw new Error(errorMessage);
        }

        if (typeof (price) !== 'number' || price < 0) {
            throw new Error(errorMessage);
        }

        if (typeof condition !== 'string' || condition === '') {
            throw new Error(errorMessage);
        }

        this.availableSmartphones.push({ model, storage, price, condition });

        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {
        const smartphoneIndex = this.availableSmartphones.findIndex(s => s.model === model);

        if (smartphoneIndex === -1) {
            throw new Error(`${model} was not found!`);
        }

        const smartphone = this.availableSmartphones[smartphoneIndex];

        const soldPrice = (smartphone.storage >= desiredStorage) ?
            smartphone.price : (desiredStorage - smartphone.storage) <= 128 ?
                smartphone.price * 0.9 : smartphone.price * 0.8;

        this.availableSmartphones.splice(smartphoneIndex, 1);

        this.soldSmartphones.push({ model: smartphone.model, storage: smartphone.storage, soldPrice });

        this.revenue += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    upgradePhones() {
        if (this.availableSmartphones.length === 0) {
            throw new Error('There are no available smartphones!');
        }

        this.availableSmartphones.forEach(s => s.storage *= 2);

        return `Upgraded Smartphones:\n${this.availableSmartphones
            .map(s => `${s.model} / ${s.storage} GB / ${s.condition} condition / ${s.price.toFixed(2)}$`).join('\n')}`;
    }

    salesJournal(criteria) {
        const firstRow = `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n${this.soldSmartphones.length} smartphones sold:\n`;

        switch (criteria) {
            case 'storage':
                return firstRow + `${this.soldSmartphones
                    .sort((s1, s2) => s2.storage - s1.storage)
                    .map(s => `${s.model} / ${s.storage} GB / ${s.soldPrice.toFixed(2)}$`)
                    .join('\n')}`;
            case 'model':
                return firstRow + `${this.soldSmartphones
                    .sort((s1, s2) => s1.model.localeCompare(s2.model))
                    .map(s => `${s.model} / ${s.storage} GB / ${s.soldPrice.toFixed(2)}$`)
                    .join('\n')}`;
            default:
                throw new Error('Invalid criteria!');
        }
    }
}

// Input 1
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));

// Input 2
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));

// Input 3
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());

// Input 4
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// retailer.sellSmartphone('Samsung S20 Ultra', 256);
// retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
// console.log(retailer.salesJournal('model'));