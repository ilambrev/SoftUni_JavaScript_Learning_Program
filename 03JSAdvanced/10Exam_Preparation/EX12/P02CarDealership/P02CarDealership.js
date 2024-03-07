class CarDealership {

    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {

        if (typeof model !== 'string' || model === '' ||
            typeof horsepower !== 'number' || !Number.isInteger(horsepower) || horsepower < 0 ||
            typeof price !== 'number' || price < 0 ||
            typeof mileage !== 'number' || mileage < 0) {

            throw new Error('Invalid input!');
        }

        this.availableCars.push({ model, horsepower, price, mileage });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const carIndex = this.availableCars.findIndex(c => c.model === model);

        if (carIndex === -1) {
            throw new Error(`${model} was not found!`);
        }

        const car = this.availableCars[carIndex];

        const mileageDifference = car.mileage - desiredMileage;

        let soldPrice = car.price;

        if (mileageDifference > 0 && mileageDifference <= 40000) {
            soldPrice = car.price * 0.95;
        } else if (mileageDifference > 40000) {
            soldPrice = car.price * 0.90;
        }

        this.soldCars.push({ model: car.model, horsepower: car.horsepower, soldPrice });

        this.availableCars.splice(carIndex, 1);

        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return 'There are no available cars';
        }

        return `-Available cars:\n${this.availableCars
            .map(c => `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`)
            .join('\n')}`;
    }

    salesReport(criteria) {
        const sortedSoldCars = JSON.parse(JSON.stringify(this.soldCars));

        switch (criteria) {
            case 'horsepower':
                sortedSoldCars.sort((c1, c2) => c2.horsepower - c1.horsepower);
                break;
            case 'model':
                sortedSoldCars.sort((c1, c2) => c1.model.localeCompare(c2.model));
                break;
            default:
                throw new Error('Invalid criteria!');
        }

        const firstRow = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        const secondRow = `-${sortedSoldCars.length} cars sold:\n`;
        const thirdRow = `${sortedSoldCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`).join('\n')}`;

        return `${firstRow}${secondRow}${thirdRow}`;
    }
}

// Input 1
// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// Input 2
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// Input 3
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

// Input 4
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
// console.log(dealership.salesReport('horsepower'));