function heroicInventory(input) {

    const heroes = [];

    for (let line of input) {

        const [name, level, itemsAsString] = line.split(' / ');
        const items = itemsAsString == undefined ? [] : itemsAsString.split(', ');
        const newHero = { name, level: Number(level), items };

        heroes.push(newHero);

    }

    return JSON.stringify(heroes);

}

/*
console.log(heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));
console.log(heroicInventory([
    'Jake / 1000 / Gauss, HolidayGrenade'
]));
*/