function inventory(input) {

    class Hero {

        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }

    }

    let heroes = [];

    for (let line of input) {

        let [name, level, items] = line.split(' / ');
        level = Number(level);
        let hero = new Hero(name, level, items);

        heroes.push(hero);

    }

    heroes.sort((h1, h2) => h1.level - h2.level).forEach(h => console.log(`Hero: ${h.name}\nlevel => ${h.level}\nitems => ${h.items}`));

}

/*
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
]);
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);
*/