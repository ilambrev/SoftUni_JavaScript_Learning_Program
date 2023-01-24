function cake(input) {

    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);
    let cakePieces = cakeWidth * cakeLength;
    let data = input[2];
    let index = 2;

    while (data !== "STOP") {

        let currentPiecesEaten = Number(data);

        cakePieces -= currentPiecesEaten;

        if (cakePieces < 0) {
            console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`)
            break;
        } else if (cakePieces === 0) {
            break;
        }

        index++;
        data = input[index];
    }

    if (cakePieces > 0) {
        console.log(`${cakePieces} pieces are left.`);
    }

}

// cake(["10", "10", "20", "20", "20", "20", "21"]);
// cake(["10", "2", "2", "4", "6", "STOP"]);