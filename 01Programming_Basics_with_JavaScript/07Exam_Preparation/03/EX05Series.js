function series(input) {

    let budget = Number(input[0]);
    let serialsNumber = Number(input[1]);
    let serialsTotalPrice = 0;
    let index = 2;

    for (let i = 1; i <= serialsNumber; i++) {

        let serialName = input[index];
        let serialPrice = Number(input[index + 1]);

        switch (serialName) {
            case 'Thrones':
                serialPrice *= (100 - 50) / 100;
                break;
            case 'Lucifer':
                serialPrice *= (100 - 40) / 100;
                break;
            case 'Protector':
                serialPrice *= (100 - 30) / 100;
                break;
            case 'TotalDrama':
                serialPrice *= (100 - 20) / 100;
                break;
            case 'Area':
                serialPrice *= (100 - 10) / 100;
                break;
        }

        serialsTotalPrice += serialPrice;
        index += 2;

    }

    console.log(serialsTotalPrice <= budget ?
        `You bought all the series and left with ${(budget - serialsTotalPrice).toFixed(2)} lv.` :
        `You need ${(serialsTotalPrice - budget).toFixed(2)} lv. more to buy the series!`);

}

// series(['10', '3', 'Thrones', '5', 'Riverdale', '5', 'Gotham', '2']);
// series(['25', '6', 'Teen Wolf', '8', 'Protector', '5', 'TotalDrama', '5', 'Area', '4', 'Thrones', '5', 'Lucifer', '9']);