function equalNeighbors(input) {

    let neighborPairs = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (j < input[i].length - 1 && input[i][j] === input[i][j + 1]) {
                neighborPairs++;
            }
            if (i < input.length - 1 && input[i][j] === input[i + 1][j]) {
                neighborPairs++;
            }
        }
    }

    return neighborPairs;
}

// console.log(equalNeighbors([
//     ['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']
// ]));

// console.log(equalNeighbors([
//     ['test', 'yo', 'yo', 'ho'],
//     ['well', 'done', 'no', '6'],
//     ['not', 'done', 'yet', '5']
// ]));