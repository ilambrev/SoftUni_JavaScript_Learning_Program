function starEnigma(input) {

    const messagesNumber = Number(input[0]);

    const countLetters = (message) => {

        let result = message.match(/[star]/gi);

        return result !== null ? result.length : 0;
    };

    const decryptMessage = (message, key) => message.split('').map(s => String.fromCharCode(s.charCodeAt(0) - key)).join('');

    const planets = {};

    const regexp = /[^@!:>-]*@(?<planet>[A-Za-z]+)[^@!:>-]*:(?<population>\d+)[^@!:>-]*!(?<attackType>[AD]{1})![^@!:>-]*->(?<soldierCount>\d+)[^@!:>-]*/;

    for (let i = 1; i <= messagesNumber; i++) {

        const message = input[i];

        if (message === '') {
            continue;
        }

        const key = countLetters(message);

        const decryptedMessage = decryptMessage(message, key);

        const match = regexp.exec(decryptedMessage);

        if (match !== null) {

            const name = match.groups.planet;
            const population = Number(match.groups.population);
            const attackType = match.groups.attackType;
            const soldierCount = Number(match.groups.soldierCount);

            const planet = { name, population, attackType, soldierCount };

            planets[name] = planet;
        }

    }

    const planetsByAttackType = (attackType) => {
        return Object.values(planets).filter(p => p.attackType === attackType).map(p => p.name).sort((p1, p2) => p1.localeCompare(p2));
    }

    const attackedPlanets = planetsByAttackType('A');

    console.log(`Attacked planets: ${attackedPlanets.length}`);

    if (attackedPlanets.length > 0) {
        console.log('-> ' + attackedPlanets.join('\n-> '))
    }

    const destroyedPlanets = planetsByAttackType('D');

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);

    if (destroyedPlanets.length > 0) {
        console.log('-> ' + destroyedPlanets.join('\n-> '))
    }

}

// starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
// starEnigma(['3', "tt(''DGsvywgerx>6444444444%H%1B9444", 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR']);