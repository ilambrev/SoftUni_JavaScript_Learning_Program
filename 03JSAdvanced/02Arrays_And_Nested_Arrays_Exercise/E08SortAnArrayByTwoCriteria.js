function sortAnArrayBy2Criteria(inputArr) {

    console.log(inputArr.sort((w1, w2) => {

        if (w1.length != w2.length) {
            return w1.length - w2.length;
        } else {
            return w1.localeCompare(w2);
        }

    }).join('\n'))

}

/*
sortAnArrayBy2Criteria([
    'alpha',
    'beta',
    'gamma'
]);
sortAnArrayBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]);
sortAnArrayBy2Criteria([
    'test',
    'Deny',
    'omen',
    'Default'
]);
*/