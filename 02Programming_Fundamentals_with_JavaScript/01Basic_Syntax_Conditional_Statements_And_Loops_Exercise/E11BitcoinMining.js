function bitcoinMining(input) {

    const bitcoinPrice = 11949.16;
    const goldPricePerGram = 67.51;
    let dayOfFirstBitcoin = 0;
    let numberOfBitcoins = 0;
    let moneyFromGold = 0;

    for (let i = 0; i < input.length; i++) {

        let currentGoldAmount = Number(input[i]);

        if ((i + 1) % 3 === 0) {
            currentGoldAmount *= 0.70;
        }

        moneyFromGold += currentGoldAmount * goldPricePerGram;

        if (moneyFromGold >= bitcoinPrice) {
            let bitcoinsBouth = Math.floor(moneyFromGold / bitcoinPrice);
            numberOfBitcoins += bitcoinsBouth;
            moneyFromGold -= bitcoinsBouth * bitcoinPrice;

            if (dayOfFirstBitcoin === 0) {
                dayOfFirstBitcoin = i + 1;
            }

        }

    }

    console.log(`Bought bitcoins: ${numberOfBitcoins}`);

    if (numberOfBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }

    console.log(`Left money: ${(moneyFromGold.toFixed(2))} lv.`);

}

// bitcoinMining([100, 200, 300]);
// bitcoinMining([50, 100]);
// bitcoinMining([3124.15, 504.212, 2511.124]);