function cityInfo(city) {

    for (let [key, value] of Object.entries(city)) {

        console.log(`${key} -> ${value}`);

    }

}

// cityInfo({
//     name: "Sofia",
//     area: 492,
//     population: 1238438,
//     country: "Bulgaria",
//     postCode: "1000"
// });

// cityInfo({
//     name: "Plovdiv",
//     area: 389,
//     population: 1162358,
//     country: "Bulgaria",
//     postCode: "4000"
// })