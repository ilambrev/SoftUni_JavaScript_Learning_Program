function townPopulation(input) {

    let townRegister = input.reduce((acc, curr) => {

        let [townName, population] = curr.split(' <-> ');

        if (acc.hasOwnProperty(townName)) {
            acc[townName] += Number(population);
        } else {
            acc[townName] = Number(population);
        }

        return acc;

    }, {});

    console.log(Object.entries(townRegister).map(([key, value]) => key + ' : ' + value).join('\n'));

}

/*
townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);
*/