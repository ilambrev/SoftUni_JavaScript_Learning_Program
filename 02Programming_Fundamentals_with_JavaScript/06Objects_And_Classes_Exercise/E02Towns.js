function towns(input) {

    let townsInfo = [];

    for (let line of input) {

        let [townName, latitude, longitude] = line.split(' | ');
        let townLatitude = Number(latitude).toFixed(2);
        let townLongitude = Number(longitude).toFixed(2);

        let town = {
            town: townName,
            latitude: townLatitude,
            longitude: townLongitude,
        }

        townsInfo.push(town);

    }

    townsInfo.forEach(t => console.log(t));

}

// towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
// towns(['Plovdiv | 136.45 | 812.575']);