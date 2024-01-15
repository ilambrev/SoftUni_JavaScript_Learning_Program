function argumentInfo() {
    const argumentsTypesCounts = Array.from(arguments).reduce((acc, curr) => {
        let argumentType = typeof curr;

        console.log(`${argumentType}: ${curr}`);

        if (!acc.hasOwnProperty(argumentType)) {
            acc[argumentType] = 1;
        } else {
            acc[argumentType] += 1;
        }

        return acc;
    }, {});

    Object.entries(argumentsTypesCounts)
        .sort(([k1, v1], [k2, v2]) => v2 - v1)
        .forEach(e => console.log(`${e[0]} = ${e[1]}`));
}

// argumentInfo('cat', 42, function () { console.log('Hello world!'); });