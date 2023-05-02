function addressBook(input) {

    let addressBookArr = {};

    for (let line of input) {

        let [name, address] = line.split(':');

        addressBookArr[name] = address;

    }

    let names = Object.keys(addressBookArr).sort((n1, n2) => n1.localeCompare(n2));

    names.forEach(n => console.log(`${n} -> ${addressBookArr[n]}`));

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