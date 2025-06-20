function matchTickets(budget, ticketsType, groupMembers) {
    const vipPrice = 499.99;
    const normalPrice = 249.99;
    let expenses = 0;

    if (groupMembers < 5) {
        expenses += budget * 0.75;
    } else if (groupMembers < 10) {
        expenses += budget * 0.60;
    } else if (groupMembers < 25) {
        expenses += budget * 0.50;
    } else if (groupMembers < 50) {
        expenses += budget * 0.40;
    } else {
        expenses += budget * 0.25;
    }

    if (ticketsType == 'Normal') {
        expenses += groupMembers * normalPrice;
    } else {
        expenses += groupMembers * vipPrice;
    }

    const result = budget - expenses;

    if (result >= 0) {
        console.log(`Yes! You have ${result.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(result).toFixed(2)} leva.`);
    }
}

// matchTickets(1000, 'Normal', 1);
// matchTickets(30000, 'VIP', 49);