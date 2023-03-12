function dungeonestDark(inputString) {

    const rooms = inputString[0].split('|');

    let health = 100;
    let coins = 0;

    for (let i = 0; i < rooms.length; i++) {

        let roomDetails = rooms[i].split(' ');

        switch (roomDetails[0]) {
            case 'potion':

                let potionHealthPoints = Number(roomDetails[1]);
                let usedHealthPoints = 100 - health >= potionHealthPoints ? potionHealthPoints : 100 - health;
                health = health + usedHealthPoints;
                console.log(`You healed for ${usedHealthPoints} hp.`);
                console.log(`Current health: ${health} hp.`);

                break;
            case 'chest':

                let coinsInChest = Number(roomDetails[1]);
                coins += coinsInChest;
                console.log(`You found ${coinsInChest} coins.`)

                break;
            default:

                let monsterName = roomDetails[0];
                let monsterAttackPoints = Number(roomDetails[1]);
                health = health - monsterAttackPoints < 0 ? 0 : health - monsterAttackPoints;

                if (health === 0) {

                    console.log(`You died! Killed by ${monsterName}.`)
                    console.log(`Best room: ${i + 1}`);

                } else {

                    console.log(`You slayed ${monsterName}.`);

                }

                break;
        }

        if (health === 0) {

            break;

        }

    }

    if (health > 0) {

        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);

    }

}

// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);