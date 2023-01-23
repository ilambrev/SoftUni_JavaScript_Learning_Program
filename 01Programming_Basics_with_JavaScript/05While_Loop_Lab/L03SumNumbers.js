function sumNumbers(input) {

    let number = Number(input[0]);
    let index = 1;
    let numbersSum = 0;

    while (numbersSum < number) {

        numbersSum += Number(input[index]);
        index++;

    }

    console.log(numbersSum);

}

// sumNumbers(["100", "10", "20", "30", "40"]);
// sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);