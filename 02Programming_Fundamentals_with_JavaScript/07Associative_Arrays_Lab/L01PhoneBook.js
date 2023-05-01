function phoneBook(input) {

    let phoneBookArr = {};

    for (let line of input) {

        let [name, phoneNumber] = line.split(' ');

        phoneBookArr[name] = phoneNumber;

    }

    for (let key in phoneBookArr) {

        console.log(`${key} -> ${phoneBookArr[key]}`);

    }

}

// phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);
// phoneBook(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344']);