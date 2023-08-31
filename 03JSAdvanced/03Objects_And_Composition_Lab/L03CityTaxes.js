function cityTaxes(name, population, treasury) {

    return ({
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function () { this.treasury += Math.ceil(this.population * this.taxRate) },
        applyGrowth: function (percentage) { this.population += Math.ceil(this.population * percentage / 100) },
        applyRecession: function (percentage) { this.treasury -= Math.ceil(this.treasury * percentage / 100) },
    });
}

/*
function test1() {
    const city = cityTaxes('Tortuga', 7000, 15000);

    console.log(city);
}

function test2() {
    const city = cityTaxes('Tortuga', 7000, 15000);
    city.collectTaxes();

    console.log(city.treasury);

    city.applyGrowth(5);

    console.log(city.population);
}

test1();
test2();
*/