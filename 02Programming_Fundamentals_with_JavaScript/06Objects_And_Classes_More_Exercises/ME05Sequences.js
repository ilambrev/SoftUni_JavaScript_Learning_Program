function sequences(sequences) {

    let sortedSequences = sequences.map(sequence => JSON.parse(sequence).sort((num1, num2) => num2 - num1));

    sortedSequences = sortedSequences.sort((seq1, seq2) => seq1.length - seq2.length);

    let uniqueSequences = sortedSequences
        .map(sequence => JSON.stringify(sequence))
        .filter((sequence, index, self) => self.indexOf(sequence) === index)
        .map(sequence => JSON.parse(sequence));

    uniqueSequences.forEach(sequence => console.log(`[${sequence.join(', ')}]`));

}

/*
sequences([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);
sequences([
    "[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"
]);
*/