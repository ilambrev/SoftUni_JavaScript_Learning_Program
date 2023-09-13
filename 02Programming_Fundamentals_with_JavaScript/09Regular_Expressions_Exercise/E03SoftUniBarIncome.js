function softUniBarIncome(input) {

    const regexp = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.\d]*(?<price>\d+.\d*)\$/;

    let orders = {};
    let index = 0;
    let lineOfInput = input[index];
    let orderCounter = 0;

    while (lineOfInput !== 'end of shift') {

        let match = regexp.exec(lineOfInput);

        if (match !== null) {
            
            orderCounter++;

            let customer = match.groups.customer;
            let product = match.groups.product;
            let count = Number(match.groups.count);
            let price = Number(match.groups.price);

            let order = { customer, product, count, price }

            orders[orderCounter] = order;

        }

        index++;
        lineOfInput = input[index];
    }

    console.log('Total income: ' + Object.values(orders).reduce((acc, curr) => {

        console.log(curr.customer + ': ' + curr.product + ' - ' + (curr.count * curr.price).toFixed(2));

        acc += curr.count * curr.price;
        
        return acc;

    }, 0).toFixed(2));

}

/*
softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
softUniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);
*/