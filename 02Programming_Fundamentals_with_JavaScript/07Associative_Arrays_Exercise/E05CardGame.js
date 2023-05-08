function cardGame(input) {

    let players = new Map();
    const cardsValues = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1,
    };

    for (let line of input) {

        let playerInfo = line.split(': ');
        let playerName = playerInfo[0];
        let playerCards = playerInfo[1].split(', ');

        if (!players.has(playerName)) {

            let cards = new Set();

            playerCards.forEach(card => cards.add(card));

            players.set(playerName, cards);

        } else {

            playerCards.forEach(card => players.get(playerName).add(card));

        }

    }

    players.forEach((cards, name) => {

        let points = Array.from(cards)
            .map(card => cardsValues[card.substring(0, card.length - 1)] * cardsValues[card[card.length - 1]])
            .reduce((cardValue1, cardValue2) => cardValue1 + cardValue2);

        console.log(`${name}: ${points}`);

    });

}

/*
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);
*/