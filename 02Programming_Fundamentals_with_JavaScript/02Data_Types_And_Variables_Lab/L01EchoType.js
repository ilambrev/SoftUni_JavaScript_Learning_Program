function echoType(value) {

    let typeOfValue = typeof (value);
    let message = '';

    switch (typeOfValue) {
        case 'string':
        case 'number':
            message = value;
            break;
        default:
            message = 'Parameter is not suitable for printing';
            break;
    }

    console.log(typeOfValue);
    console.log(message);

}

// echoType('Hello, JavaScript!');
// echoType(18);
// echoType(null);