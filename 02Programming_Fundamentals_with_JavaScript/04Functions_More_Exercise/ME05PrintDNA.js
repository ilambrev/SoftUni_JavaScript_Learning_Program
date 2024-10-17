function printDNA(length) {
    const sequence = 'ATCGTTAGGG';
    const structureRows = {
        0: '**LR**',
        1: '*L--R*',
        2: 'L----R',
        3: '*L--R*',
    };

    let sequenceIndex = 0;
    let rowIndex = 0;

    for (let i = 0; i < length; i++) {
        if (sequenceIndex == sequence.length) {
            sequenceIndex = 0;
        }

        if (i % 4 == 0) {
            rowIndex = 0;
        }

        const leftSymbol = sequence.charAt(sequenceIndex);
        const rightSymbol = sequence.charAt(sequenceIndex + 1);

        let row = structureRows[rowIndex];

        row = row.replace('L', leftSymbol);
        row = row.replace('R', rightSymbol);

        console.log(row);

        sequenceIndex += 2;
        rowIndex++;
    }
}

// printDNA(4);
// printDNA(10);