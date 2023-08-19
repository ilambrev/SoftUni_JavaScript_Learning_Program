function validityChecker(x1, y1, x2, y2) {

    const isDistanceValid = (x1, y1, x2, y2) => {

        return Number.isInteger(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
    }

    const comparisons = {
        1: [x1, y1, 0, 0],
        2: [x2, y2, 0, 0],
        3: [x1, y1, x2, y2],
    }

    Object.values(comparisons)
        .forEach(c => console.log(`{${c[0]}, ${c[1]}} to {${c[2]}, ${c[3]}} is ${isDistanceValid(...c) ? 'valid' : 'invalid'}`));

}

// validityChecker(3, 0, 0, 4);
// validityChecker(2, 1, 1, 1);