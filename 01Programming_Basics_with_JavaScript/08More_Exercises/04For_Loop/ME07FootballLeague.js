function footballLeague(input) {
    const stadiumCapacity = Number(input[0]);
    const numberOfFans = Number(input[1]);

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let i = 2; i <= numberOfFans + 1; i++) {
        switch (input[i]) {
            case 'A':
                sectorA++;
                break;
            case 'B':
                sectorB++;
                break;
            case 'V':
                sectorV++;
                break;
            case 'G':
                sectorG++;
                break;
        }
    }

    console.log(`${((sectorA / numberOfFans) * 100).toFixed(2)}%`);
    console.log(`${((sectorB / numberOfFans) * 100).toFixed(2)}%`);
    console.log(`${((sectorV / numberOfFans) * 100).toFixed(2)}%`);
    console.log(`${((sectorG / numberOfFans) * 100).toFixed(2)}%`);
    console.log(`${((numberOfFans / stadiumCapacity) * 100).toFixed(2)}%`);
}

// footballLeague(['76', '10', 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B']);
// footballLeague(['93', '16', 'A', 'V', 'G', 'G', 'B', 'B', 'G', 'B', 'A', 'B', 'B', 'B', 'A', 'B', 'B', 'A']);
// footballLeague(['1000', '12', 'A', 'A', 'V', 'V', 'A', 'G', 'A', 'A', 'V', 'G', 'V', 'A']);