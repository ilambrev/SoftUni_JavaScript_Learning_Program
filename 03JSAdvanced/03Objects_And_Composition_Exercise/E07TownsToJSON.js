function townsToJSON(input) {

    const parseInputData = (lineOfInput) => {

        return lineOfInput.split(' | ').map(e => e.replace('|', '').trim());

    }

    const townsInfo = [];

    const [town, latitude, longitude] = parseInputData(input[0]);

    for (let i = 1; i < input.length; i++) {

        const [townName, latitudeValue, longitudeValue] = parseInputData(input[i]);

        const newTown = {};

        newTown[town] = townName;
        newTown[latitude] = Number(Number(latitudeValue).toFixed(2));
        newTown[longitude] = Number(Number(longitudeValue).toFixed(2));

        townsInfo.push(newTown);

    }

    return JSON.stringify(townsInfo);

}

/*
console.log(townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));
console.log(townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]));
*/