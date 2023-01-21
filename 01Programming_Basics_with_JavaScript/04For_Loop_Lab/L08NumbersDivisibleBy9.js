function numbersDivisibleBy9(input) {

    let beginNum = Number(input[0]);
    let endNum = Number(input[1]);
    let sum = 0;
    let numbers = "";

    for (let i = beginNum; i <= endNum; i++) {
        if (i % 9 === 0) {
            sum += i;
            numbers += i + "\n";
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(numbers);
}

// numbersDivisibleBy9(["100", "200"]);