function storage(input) {

    let items = new Map();

    for (let line of input) {

        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);

        items.has(item) ? items.set(item, items.get(item) + quantity) : items.set(item, quantity);

    }

    for (let [item, quantity] of items.entries()) {

        console.log(`${item} -> ${quantity}`);

    }

}

// storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
// storage(['apple 50', 'apple 61', 'coffee 115', 'coffee 40']);