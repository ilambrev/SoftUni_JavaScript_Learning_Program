function convertToJSON(firstParam, secondParam, thirdParam) {

    let person = { name: firstParam, lastName: secondParam, hairColor: thirdParam };

    let jsonStr = JSON.stringify(person);

    console.log(jsonStr);

}

// convertToJSON('George', 'Jones', 'Brown');
// convertToJSON('Peter', 'Smith', 'Blond');