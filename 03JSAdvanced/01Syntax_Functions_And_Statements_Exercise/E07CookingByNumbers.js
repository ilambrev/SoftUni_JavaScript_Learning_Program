function cookingByNumbers(...input) {

    let num = Number(input[0]);
    const commands = input.slice(1);

    const operations = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num - num * 0.2,
    }

    console.log(commands.reduce((acc, curr, i) => {

        num = operations[curr](num);

        acc += num;

        if (i < commands.length - 1) {
            acc += '\n';
        }

        return acc;

    }, ''));

}

// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');