function tickets(ticketsStrings, sortingCriterion) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const tickets = ticketsStrings.reduce((acc, curr) => {
        let [destination, price, status] = curr.split('|');
        price = Number(price);

        acc.push(new Ticket(destination, price, status));

        return acc;
    }, []);

    if (sortingCriterion === 'price') {
        return tickets.sort((t1, t2) => t1.price - t2.price);
    } else {
        return tickets.sort((t1, t2) => t1[sortingCriterion].localeCompare(t2[sortingCriterion]));
    }
}

// console.log(JSON.stringify(tickets([
//     'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'
// ],
//     'destination'
// ), replacer, 2));

// console.log(JSON.stringify(tickets([
//     'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'
// ],
//     'status'
// ), replacer, 2));

// function replacer(key, value) {
//     if (typeof value === "number") {
//         return value.toFixed(2);
//     }
//     return value;
// }