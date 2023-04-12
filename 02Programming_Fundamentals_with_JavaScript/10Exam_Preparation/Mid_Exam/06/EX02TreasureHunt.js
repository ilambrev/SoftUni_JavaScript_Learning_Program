function treasureHunt(input) {

    let itemsInChest = input[0].split('|');
    let commands = input.slice(1);
    let command = commands[0];
    let index = 0;

    while (command !== 'Yohoho!') {

        let commandParams = command.split(' ');
        let commandName = commandParams[0];

        switch (commandName) {
            case 'Loot':

                let newItems = commandParams.slice(1);

                for (let i = 0; i < newItems.length; i++) {

                    if (!itemsInChest.includes(newItems[i])) {

                        itemsInChest.unshift(newItems[i]);

                    }

                }

                break;
            case 'Drop':

                let itemIndex = Number(commandParams[1]);

                if (itemIndex >= 0 && itemIndex < itemsInChest.length) {

                    let itemToMove = itemsInChest[itemIndex];

                    itemsInChest.splice(itemIndex, 1);
                    itemsInChest.push(itemToMove);

                }

                break;
            case 'Steal':

                let stolenItemsCount = Number(commandParams[1]);
                let stolenItems = itemsInChest.splice(Math.max(itemsInChest.length - stolenItemsCount, 0), stolenItemsCount);

                console.log(stolenItems.join(', '));

                break;

        }

        index++;
        command = commands[index];

    }

    if (itemsInChest.length === 0) {

        console.log('Failed treasure hunt.');

    } else {

        let averageGain = 0;

        for (let item of itemsInChest) {

            averageGain += item.length;

        }

        averageGain /= itemsInChest.length;

        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);

    }

}

// treasureHunt(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"]);
// treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]);