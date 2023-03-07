function chessBoard(size) {

    let boardSTring = '<div class="chessboard">\n';

    for (let row = 1; row <= size; row++) {

        boardSTring += '  <div>\n';

        for (let col = 1; col <= size; col++) {

            let color = (row + col) % 2 === 0 ? 'black' : 'white';

            boardSTring += `    <span class="${color}"></span>\n`;

        }

        boardSTring += '  </div>\n';

    }

    boardSTring += '</div>';

    console.log(boardSTring);

}

// chessBoard(3);