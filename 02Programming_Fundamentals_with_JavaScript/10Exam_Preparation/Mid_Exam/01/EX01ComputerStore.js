function computerStore(input) {

    const discountInPercentage = 10;
    const taxesInPercentage = 20;
    let customerType = input[input.length - 1];
    let totalPriceWithoutTaxes = 0;

    for (let i = 0; i < input.length - 1; i++) {

        let partPrice = Number(input[i]);

        if (partPrice >= 0) {

            totalPriceWithoutTaxes += partPrice;

        } else {

            console.log('Invalid price!');

        }

    }

    if (totalPriceWithoutTaxes === 0) {

        console.log(`Invalid order!`);

    } else {

        let taxes = totalPriceWithoutTaxes * (taxesInPercentage / 100);
        let totalPricesWithTaxes = totalPriceWithoutTaxes + taxes;

        if (customerType === 'special') {

            totalPricesWithTaxes -= totalPricesWithTaxes * (discountInPercentage / 100);

        }

        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPricesWithTaxes.toFixed(2)}$`);

    }

}

// computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
// computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
// computerStore(['regular']);