function muOnline(input) {

    let health = 100;
    let bitcoins = 0;
    let rooms = input.split('|');
    let reachedRoom = 0;
    let isHeroDeath = false;

    for (let i = 0; i < rooms.length; i++) {

        reachedRoom++;

        let commandParams = rooms[i].split(' ');
        let command = commandParams[0];
        let number = Number(commandParams[1]);

        switch (command) {
            case 'potion':

                let amount = health + number <= 100 ? number : 100 - health;

                health += amount;

                console.log(`You healed for ${amount} hp.`);
                console.log(`Current health: ${health} hp.`);

                break;
            case 'chest':

                bitcoins += number;

                console.log(`You found ${number} bitcoins.`);

                break;
            default:

                health -= number;

                if (health > 0) {

                    console.log(`You slayed ${command}.`);

                } else {

                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${reachedRoom}`);

                    isHeroDeath = true;

                }

                break;
        }

        if (isHeroDeath) {

            break;

        }

    }

    if (!isHeroDeath) {

        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);

    }

}

// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
// muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");