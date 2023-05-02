function addressBook(input) {

    let addressBookArr = {};

    for (let line of input) {

        let [name, address] = line.split(':');

        addressBookArr[name] = address;

    }

    Object.entries(addressBookArr).sort((e1, e2) => e1[0].localeCompare(e2[0])).forEach(e => console.log(`${e[0]} -> ${e[1]}`));

}

// addressBook(['Tim:Doe Crossing',
//     'Bill:Nelson Place',
//     'Peter:Carlyle Ave',
//     'Bill:Ornery Rd'
// ]);
// addressBook(['Bob:Huxley Rd',
//     'John:Milwaukee Crossing',
//     'Peter:Fordem Ave',
//     'Bob:Redwing Ave',
//     'George:Mesta Crossing',
//     'Ted:Gateway Way',
//     'Bill:Gateway Way',
//     'John:Grover Rd',
//     'Peter:Huxley Rd',
//     'Jeff:Gateway Way',
//     'Jeff:Huxley Rd'
// ]);