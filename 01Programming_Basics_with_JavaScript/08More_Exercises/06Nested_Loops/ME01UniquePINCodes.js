function uniquePINCodes(num1, num2, num3) {
    for (let i = 2; i <= num1; i += 2) {
        for (let j = 2; j <= num2; j++) {
            let isPrime = true;

            for (let l = 2; l < j; l++) {
                if (j % l == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (!isPrime) {
                continue;
            }

            for (let k = 2; k <= num3; k += 2) {
                console.log(i, j, k);
            }
        }
    }
}

// uniquePINCodes(3, 5, 5);
// uniquePINCodes(8, 2, 8);