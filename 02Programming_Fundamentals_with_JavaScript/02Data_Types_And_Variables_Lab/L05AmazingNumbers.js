function amazingNumbers(number) {

    let sumOfDigits = 0;


    for (let i = 0; i < String(number).length; i++) {

        sumOfDigits += Number(String(number)[i]);
    }

    console.log(`${number} Amazing? ${String(sumOfDigits).includes('9') ? 'True' : 'False'}`);

}

// amazingNumbers(1233);
// amazingNumbers(999);