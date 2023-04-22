function gladiatorInventory(input) {

    let equipment = input[0].split(' ');
    let commands = input.slice(1);

    for (let i = 0; i < commands.length; i++) {

        let [command, item] = commands[i].split(' ');

        switch (command) {
            case 'Buy':

                if (equipment.filter(i => i === item).length === 0) {

                    equipment.push(item);

                }

                break;
            case 'Trash':

                if (equipment.filter(i => i === item).length > 0) {

                    let indexOfItemToRemove = equipment.indexOf(item);

                    equipment.splice(indexOfItemToRemove, 1);

                }

                break;
            case 'Repair':

                if (equipment.filter(i => i === item).length > 0) {

                    let indexOfItemToRepair = equipment.indexOf(item);

                    equipment.push(equipment[indexOfItemToRepair]);
                    equipment.splice(indexOfItemToRepair, 1);

                }

                break;
            case 'Upgrade':

                let itemName = item.split('-')[0];

                if (equipment.filter(i => i === itemName).length > 0) {

                    let indexOfItemToUpgrade = equipment.indexOf(itemName);

                    equipment.splice(indexOfItemToUpgrade + 1, 0, item.replace('-', ':'));

                }

                break;
        }

    }

    console.log(equipment.join(' '));

}

// gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
// gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);