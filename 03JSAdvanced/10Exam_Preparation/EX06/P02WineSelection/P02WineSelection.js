class WineSelection {
    bill = 0;

    constructor(space) {
        this.space = space;
        this.wines = [];
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length === this.space) {
            throw new Error('Not enough space in the cellar.');
        }

        this.wines.push({ wineName, wineType, price, paid: false });

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const wine = this.wines.find(w => w.wineName === wineName);

        if (wine === undefined) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }

        wine.paid = true;
        this.bill += price;

        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const wineIndex = this.wines.findIndex(w => w.wineName === wineName);

        if (wineIndex === -1) {
            throw new Error("The wine, you're looking for, is not found.");
        }

        const wine = this.wines[wineIndex];

        if (!wine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines.splice(wineIndex, 1);

        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (arguments.length === 0) {
            const firstLine = `You have space for ${this.space - this.wines.length} bottles more.\n`;
            const secondLine = `You paid ${this.bill}$ for the wine.\n`;
            const thirdLine = `${this.wines
                .sort((w1, w2) => w1.wineName.localeCompare(w2.wineName))
                .map(w => `${w.wineName} > ${w.wineType} - ${w.paid ? 'Has Paid' : 'Not Paid'}.`)
                .join('\n')}`;
            return `${firstLine}${secondLine}${thirdLine}`;
        }

        const winesOfType = this.wines.filter(w => w.wineType === wineType);

        if (winesOfType.length === 0) {
            throw new Error(`There is no ${wineType} in the cellar.`);
        }

        return `${winesOfType.map(w => `${w.wineName} > ${w.wineType} - ${w.paid ? 'Has Paid' : 'Not Paid'}.`)}`;
    }
}

// Input 1
// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// Input 2
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

// Input 3
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// Input 4
// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
// console.log(selection.cellarRevision('Rose'));

// Input 5
// const selection = new WineSelection(5)
// selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
// selection.payWineBottle('Bodegas Godelia Mencía', 144);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// console.log(selection.cellarRevision());