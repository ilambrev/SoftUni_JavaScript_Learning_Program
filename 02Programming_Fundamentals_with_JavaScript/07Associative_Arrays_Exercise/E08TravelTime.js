function travelTime(input) {

    let countries = {};

    for (let line of input) {

        let countryData = line.split(' > ');
        let country = countryData[0];
        let townName = countryData[1];
        let offerValue = Number(countryData[2]);

        if (!countries.hasOwnProperty(country)) {

            let towns = {};
            countries[country] = towns;

        }

        if (!countries[country].hasOwnProperty(townName)) {

            countries[country][townName] = offerValue;

        } else {

            if (countries[country][townName] > offerValue) {

                countries[country][townName] = offerValue;

            }

        }

    }

    Object.entries(countries)
        .sort(([country1], [country2]) => country1.localeCompare(country2))
        .forEach(country => {

            let townOffers = '';

            Object.entries(country[1])
                .sort(([town1, offer1], [town2, offer2]) => offer1 - offer2)
                .forEach(town => townOffers += (`${town[0]} -> ${town[1]} `));

            console.log(`${country[0]} -> ${townOffers.trim()}`);

        });

}

/*
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);
*/