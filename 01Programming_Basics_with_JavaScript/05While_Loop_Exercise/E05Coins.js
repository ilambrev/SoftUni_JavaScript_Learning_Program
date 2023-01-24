function coins(input) {
    let change = Math.floor(Number(input[0]) * 100);

    let coinsNumber = 0;
    let i = 1;

    while (change > 0) {

        let currentCoinsNumber = 0;

        switch (i) {
            case 1:
                currentCoinsNumber = Math.floor(change / 200);
                change -= currentCoinsNumber * 200;
                break;
            case 2:
                currentCoinsNumber = Math.floor(change / 100);
                change -= currentCoinsNumber * 100;
                break;
            case 3:
                currentCoinsNumber = Math.floor(change / 50);
                change -= currentCoinsNumber * 50;
                break;
            case 4:
                currentCoinsNumber = Math.floor(change / 20);
                change -= currentCoinsNumber * 20;
                break;
            case 5:
                currentCoinsNumber = Math.floor(change / 10);
                change -= currentCoinsNumber * 10;
                break;
            case 6:
                currentCoinsNumber = Math.floor(change / 5);
                change -= currentCoinsNumber * 5;
                break;
            case 7:
                currentCoinsNumber = Math.floor(change / 2);
                change -= currentCoinsNumber * 2;
                break;
            case 8:
                currentCoinsNumber = Math.floor(change / 1);
                change -= currentCoinsNumber * 1;
                break;
        }

        coinsNumber += currentCoinsNumber;
        i++;
    }

    console.log(coinsNumber);

}

// coins(["1.23"]);
// coins(["2"]);
// coins(["0.56"]);
// coins(["2.73"]);