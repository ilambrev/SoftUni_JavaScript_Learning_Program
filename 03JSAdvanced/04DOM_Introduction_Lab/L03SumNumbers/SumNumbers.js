function calc() {

    let num1 = Number(document.querySelector('#num1').value);

    let num2 = Number(document.querySelector('#num2').value);

    let sum = num1 + num2;

    document.querySelector('#sum').value = sum;

}