function listOfNames(names) {

    names.sort((n1, n2) => n1.localeCompare(n2));

    for (let i = 1; i <= names.length; i++) {
        console.log(`${i}.${names[i - 1]}`);
    }

}

// listOfNames(["John", "Bob", "Christina", "Ema"]);