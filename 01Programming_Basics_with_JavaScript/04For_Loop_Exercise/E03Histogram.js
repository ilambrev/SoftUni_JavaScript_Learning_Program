function histogram(input) {
    let inputNumbersCount = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= inputNumbersCount; i++) {

        let currentNumber = Number(input[i]);

        if (currentNumber < 200) {
            p1++;
        } else if (currentNumber >= 200 && currentNumber < 400) {
            p2++;
        } else if (currentNumber >= 400 && currentNumber < 600) {
            p3++;
        } else if (currentNumber >= 600 && currentNumber < 800) {
            p4++;
        } else {
            p5++;
        }
    }

    console.log(((p1 / inputNumbersCount) * 100).toFixed(2) + "%");
    console.log(((p2 / inputNumbersCount) * 100).toFixed(2) + "%");
    console.log(((p3 / inputNumbersCount) * 100).toFixed(2) + "%");
    console.log(((p4 / inputNumbersCount) * 100).toFixed(2) + "%");
    console.log(((p5 / inputNumbersCount) * 100).toFixed(2) + "%");

}

// histogram(["3", "1", "2", "999"]);
// histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
// histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
// histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);