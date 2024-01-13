function deckOfCards(deck) {
    let isInvalidCard = false;

    const listOfCards = deck.reduce((acc, curr) => {
        const symbols = curr.split('');
        const suit = symbols.pop();
        const face = symbols.join('');

        const result = createCard(face, suit);

        if (result === 'Error') {
            console.log(`Invalid card: ${curr}`);
            isInvalidCard = true;
            return;
        }

        acc.push(result.toString());

        return acc;
    }, []);

    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }

        if (face !== face.toUpperCase() || suit !== suit.toUpperCase() || !faces.includes(face) || !suits.hasOwnProperty(suit)) {
            return 'Error';
        }

        const card = {
            face,
            suit: suits[suit],

            toString() {
                return this.face + this.suit;
            },
        }

        return card;
    }

    if (!isInvalidCard) {
        console.log(listOfCards.join(' '));
    }
}

// deckOfCards(['AS', '10D', 'KH', '2C']);

// deckOfCards(['5S', '3D', 'QD', '1C']);