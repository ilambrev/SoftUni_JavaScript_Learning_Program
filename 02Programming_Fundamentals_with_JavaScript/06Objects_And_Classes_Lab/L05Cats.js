function cats(cats) {

    for (let c of cats) {

        let catDetails = c.split(' ');
        let name = catDetails[0];
        let age = Number(catDetails[1]);

        let cat = {
            name: name,
            age: age,
            meow() {
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }

        cat.meow();

    }

}

// cats(['Mellow 2', 'Tom 5']);
// cats(['Candy 1', 'Poppy 3', 'Nyx 2']);