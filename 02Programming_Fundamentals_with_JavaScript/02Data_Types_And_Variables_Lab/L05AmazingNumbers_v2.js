function amazingNumbers(number) {

    let sumOfDigits = 0;


    for (let i = 0; i < number.toString().length; i++) {

        sumOfDigits += Number(number.toString()[i]);
    }

    console.log(`${number} Amazing? ${sumOfDigits.toString().includes('9') ? 'True' : 'False'}`);

}

// amazingNumbers(1233);
// amazingNumbers(999);