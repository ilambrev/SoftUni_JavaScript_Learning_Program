function equalPairs(input) {
    const pairs = Number(input[0]);
    let isAllPairsWithEqualValue = true;
    let pairValue = 0;
    let maxDiff = 0

    for (let i = 1; i <= pairs * 2; i += 2) {
        const value = Number(input[i]) + Number(input[i + 1]);

        if (i > 1) {
            if (value != pairValue) {
                isAllPairsWithEqualValue = false;
                const currentDiff = Math.max(value, pairValue) - Math.min(value, pairValue);
                if (currentDiff > maxDiff) {
                    maxDiff = currentDiff;
                }
            }
        }

        pairValue = value;
    }

    if (isAllPairsWithEqualValue) {
        console.log(`Yes, value=${pairValue}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

// equalPairs(['3', '1', '2', '0', '3', '4', '-1']);
// equalPairs(['4', '1', '1', '3', '1', '2', '2', '0', '0']);
// equalPairs(['2', '-1', '0', '0', '-1']);
// equalPairs(['2', '1', '2', '2', '2']);
// equalPairs(['1', '5', '5']);
// equalPairs(['2', '-1', '2', '0', '-1']);