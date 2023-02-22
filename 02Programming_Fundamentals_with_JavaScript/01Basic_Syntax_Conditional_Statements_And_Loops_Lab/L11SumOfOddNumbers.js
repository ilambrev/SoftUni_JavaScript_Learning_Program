function sumOfOddNumbers(numberOfOddNumbers) {

    let counter = 0;
    let sumOfNumbers = 0;
    let number = 1;

    while (counter < numberOfOddNumbers) {

        if (number % 2 != 0) {
            console.log(number);
            sumOfNumbers += number;
            counter++;
        }

        number++;

    }

    console.log(`Sum: ${sumOfNumbers}`);

}

// sumOfOddNumbers(5);
// sumOfOddNumbers(3);