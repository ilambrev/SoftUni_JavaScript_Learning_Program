function shoppingList(input) {

    let productsList = input[0].split('!');
    let commands = input.slice(1);
    let command = commands[0];
    index = 0;

    while (command !== 'Go Shopping!') {

        let comandParams = command.split(' ');
        let commandName = comandParams[0];
        let item = comandParams[1];


        switch (commandName) {
            case 'Urgent':
                if (!productsList.includes(item)) {
                    productsList.unshift(item);
                }
                break;
            case 'Unnecessary':
                if (productsList.includes(item)) {

                    let itemIndex = productsList.indexOf(item);

                    productsList.splice(itemIndex, 1);
                }
                break;
            case 'Correct':
             
            let newItem = comandParams[2];

            if (productsList.includes(item)) {

                let itemIndex = productsList.indexOf(item);

                productsList[itemIndex] = newItem;
            }
                break;
            case 'Rearrange':
                if (productsList.includes(item)) {

                    let itemIndex = productsList.indexOf(item);

                    productsList.splice(itemIndex, 1);

                    productsList.push(item);
                }
                break;
        }

        index++;
        command = commands[index];

    }

    console.log(productsList.join(', '));

}

// shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);
// shoppingList(["Milk!Pepper!Salt!Water!Banana", "Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"]);