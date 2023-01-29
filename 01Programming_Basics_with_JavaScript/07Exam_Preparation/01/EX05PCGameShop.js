function pcGameShop(input) {

    let soldGamesNumber = Number(input[0]);
    let hearthstoneSoldCount = 0;
    let forniteSoldCount = 0;
    let overwatchSoldCount = 0;

    for (let i = 1; i < input.length; i++) {

        let gameTitle = input[i];

        switch (gameTitle) {
            case "Hearthstone":
                hearthstoneSoldCount++;
                break;
            case "Fornite":
                forniteSoldCount++;
                break;
            case "Overwatch":
                overwatchSoldCount++;
                break;
        }

    }

    let otherSoldCount = soldGamesNumber - (hearthstoneSoldCount + forniteSoldCount + overwatchSoldCount);

    console.log(`Hearthstone - ${((hearthstoneSoldCount / soldGamesNumber) * 100).toFixed(2)}%`);
    console.log(`Fornite - ${((forniteSoldCount / soldGamesNumber) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${((overwatchSoldCount / soldGamesNumber) * 100).toFixed(2)}%`);
    console.log(`Others - ${((otherSoldCount / soldGamesNumber) * 100).toFixed(2)}%`);

}

// pcGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
// pcGameShop(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);