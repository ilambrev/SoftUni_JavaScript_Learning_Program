function inventory(input) {

    let items = input[0].split(', ');
    let commands = input.slice(1);
    let command = commands[0];
    let index = 0;

    while (command !== 'Craft!') {

        let commandParams = command.split(' - ');
        let commandName = commandParams[0];
        let item = commandParams[1];

        switch (commandName) {
            case 'Collect':

                if (!items.includes(item)) {

                    items.push(item);

                }

                break;
            case 'Drop':

                if (items.includes(item)) {

                    let itemIndex = items.indexOf(item);
                    items.splice(itemIndex, 1);

                }

                break;
            case 'Combine Items':

                let itemsToCombine = item.split(':');
                let oldItem = itemsToCombine[0];
                let newItem = itemsToCombine[1];

                if (items.includes(oldItem)) {

                    let oldItemIndex = items.indexOf(oldItem);
                    items.splice(oldItemIndex + 1, 0, newItem);

                }

                break;
            case 'Renew':

                if (items.includes(item)) {

                    let indexOfItem = items.indexOf(item);

                    items.splice(indexOfItem, 1);
                    items.push(item);

                }

                break;

        }


        index++;
        command = commands[index];

    }

    console.log(items.join(', '));

}

// inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
// inventory(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!']);