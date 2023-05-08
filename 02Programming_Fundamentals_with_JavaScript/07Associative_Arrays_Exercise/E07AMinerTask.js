function aMinerTask(input) {

    let resources = new Map();

    for (let i = 0; i < input.length; i += 2) {

        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (!resources.has(resource)) {

            resources.set(resource, 0);

        }

        resources.set(resource, resources.get(resource) + quantity);

    }

    for (let [resource, quantity] of resources) {

        console.log(`${resource} -> ${quantity}`);

    }

}

/*
aMinerTask([
    'Gold', '155',
    'Silver', '10',
    'Copper', '17'
]);
aMinerTask([
    'gold', '155',
    'silver', '10',
    'copper', '17',
    'gold', '15'
]);
*/