class Bank {
    #bankName;

    constructor(bankName) {
        this.#bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.findIndex(c => c.personalId === customer.personalId) !== -1) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);

        return customer;
    }

    depositMoney(personalId, amount) {
        const customer = this.allCustomers.find(c => c.personalId === personalId);

        if (customer === undefined) {
            throw new Error('We have no customer with this ID!');
        }

        if (!customer.hasOwnProperty('totalMoney')) {
            customer.totalMoney = 0;
        }

        if (!customer.hasOwnProperty('transactions')) {
            customer.transactions = [];
        }

        if (!customer.hasOwnProperty('lastTransactionNumber')) {
            customer.lastTransactionNumber = 0;
        }

        customer.lastTransactionNumber += 1;

        const transaction = {
            number: customer.lastTransactionNumber,
            type: 'deposit',
            amount: amount,
        };

        customer.totalMoney += amount;

        customer.transactions.push(transaction);

        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        const customer = this.allCustomers.find(c => c.personalId === personalId);

        if (customer === undefined) {
            throw new Error('We have no customer with this ID!');
        }

        if (!customer.hasOwnProperty('totalMoney')) {
            customer.totalMoney = 0;
        }

        if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.lastTransactionNumber += 1;

        const transaction = {
            number: customer.lastTransactionNumber,
            type: 'withdraw',
            amount: amount,
        };

        customer.totalMoney -= amount;

        customer.transactions.push(transaction);

        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        const customer = this.allCustomers.find(c => c.personalId === personalId);

        if (customer === undefined) {
            throw new Error('We have no customer with this ID!');
        }

        const bankInfo = `Bank name: ${this.#bankName}\n`;
        const customerNames = `Customer name: ${customer.firstName} ${customer.lastName}\n`;
        const customerAccountDetails = `Customer ID: ${customer.personalId}\nTotal Money: ${customer.totalMoney}$\n`;
        const transactionsInfo = `Transactions:\n${customer.transactions
            .sort((t1, t2) => t2.number - t1.number)
            .map(t => `${t.number}. ${customer.firstName} ${customer.lastName} ${t.type === 'deposit' ? 'made deposit of' : 'withdrew'} ${t.amount}$!`)
            .join('\n')}`;

        return `${bankInfo}${customerNames}${customerAccountDetails}${transactionsInfo}`;
    }
}

// let bank = new Bank('SoftUni Bank');
// console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
// console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));
// bank.depositMoney(6233267, 250);
// console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596, 555);
// console.log(bank.withdrawMoney(6233267, 125));
// console.log(bank.customerInfo(6233267));