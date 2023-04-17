function convertToObject(stringInJasonFormat) {

    let person = JSON.parse(stringInJasonFormat);

    for (let [key, value] of Object.entries(person)) {

        console.log(`${key}: ${value}`);

    }

}

// convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
// convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');