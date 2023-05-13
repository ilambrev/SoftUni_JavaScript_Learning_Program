function matchFullName(input) {

    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;

    let fullNames = [];

    let validFullName = null;

    while ((validFullName = pattern.exec(input)) !== null) {

        fullNames.push(validFullName[0]);

    }

    console.log(fullNames.join(' '))

}

// matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");