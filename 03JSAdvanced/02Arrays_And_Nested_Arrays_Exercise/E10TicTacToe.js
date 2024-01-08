function ticTacToe(input) {
    const firstPlayersMark = 'X';
    const secondPlayerMark = 'O';
    const dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let currentPlayerMark = '';
    let winner = '';
    let legalMovesCounter = 0;

    for (let i = 0; i < input.length; i++) {
        const inputLine = input[i];
        const row = Number(inputLine.substring(0, 1));
        const col = Number(inputLine.substring(inputLine.length - 1));

        if (dashboard[row][col] != false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        } else {
            legalMovesCounter++;
        }

        (currentPlayerMark === '' || currentPlayerMark === 'O') ? currentPlayerMark = firstPlayersMark : currentPlayerMark = secondPlayerMark;

        dashboard[row][col] = currentPlayerMark;

        if (checkForWinningCombination()) {
            winner = currentPlayerMark;
            break;
        }

        if (legalMovesCounter === 9) {
            break;
        }
    }

    function checkForWinningCombination() {
        const row1 = dashboard[0][0] + dashboard[0][1] + dashboard[0][2];
        const row2 = dashboard[1][0] + dashboard[1][1] + dashboard[1][2];
        const row3 = dashboard[2][0] + dashboard[2][1] + dashboard[2][2];
        const col1 = dashboard[0][0] + dashboard[1][0] + dashboard[2][0];
        const col2 = dashboard[0][1] + dashboard[1][1] + dashboard[2][1];
        const col3 = dashboard[0][2] + dashboard[1][2] + dashboard[2][2];
        const mainDiag = dashboard[0][0] + dashboard[1][1] + dashboard[2][2];
        const antiDiag = dashboard[0][2] + dashboard[1][1] + dashboard[2][0];

        if (row1 === 'XXX' || row2 === 'XXX' || row3 === 'XXX' || col1 === 'XXX' || col2 === 'XXX' || col3 === 'XXX' || mainDiag === 'XXX' || antiDiag === 'XXX') {
            return true;
        }

        if (row1 === 'OOO' || row2 === 'OOO' || row3 === 'OOO' || col1 === 'OOO' || col2 === 'OOO' || col3 === 'OOO' || mainDiag === 'OOO' || antiDiag === 'OOO') {
            return true;
        }

        return false;
    }

    if (winner === '') {
        console.log('The game ended! Nobody wins :(');
    } else {
        console.log(`Player ${winner} wins!`);
    }

    console.log(dashboard.map(row => row.join('\t')).join('\n'));
}

// ticTacToe([
//     "0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"
// ]);

// ticTacToe([
//     "0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"
// ]);

// ticTacToe([
//     "0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 2",
//     "1 1",
//     "2 1",
//     "2 2",
//     "0 0"
// ]);