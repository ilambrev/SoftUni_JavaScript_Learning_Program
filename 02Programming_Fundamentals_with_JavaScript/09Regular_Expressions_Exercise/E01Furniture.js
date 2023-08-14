function furniture(input) {

    let items = input.splice(0);
    let item = items.shift();
    let regexp = />>(?<name>[A-Z]\w*)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)\b/;

    let validItems = [];

    while (item !== 'Purchase') {
        let match = regexp.exec(item);

        if (match !== null) {
            let name = match.groups.name;
            let price = Number(match.groups.price);
            let quantity = Number(match.groups.quantity);

            let newItem = {
                name: name,
                price: price,
                quantity: quantity,
            }

            validItems.push(newItem);

        }

        item = items.shift();
    }

    console.log('Bought furniture:');
    validItems.forEach(i => console.log(i.name));
    let totalMoney = validItems.map(i => i.price * i.quantity).reduce((acc, curr) => acc + curr, 0);
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);

}

/*
furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);
furniture([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
]);
furniture([
    '>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase'
]);
*/