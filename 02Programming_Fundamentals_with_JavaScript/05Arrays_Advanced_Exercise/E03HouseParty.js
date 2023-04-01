function houseParty(input) {

    let partyList = [];

    for (let personData of input) {

        let details = personData.split(' ');
        let personName = details[0];

        if (details.includes('not')) {

            if (partyList.includes(personName)) {

                let nameIndex = partyList.indexOf(personName);

                if (nameIndex > -1) {

                    partyList.splice(nameIndex, 1);

                }

            } else {

                console.log(`${personName} is not in the list!`);

            }

        } else {

            if (partyList.includes(personName)) {

                console.log(`${personName} is already in the list!`);

            } else {

                partyList.push(personName);

            }

        }

    }

    console.log(partyList.join('\n'));

}

// houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
// houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);