function password(input) {

    let username = input[0];
    let password = input[1];
    let inputData = input[2];
    let index = 3;

    while (inputData !== password && index <= input.length) {
        inputData = input[index];
        index++;
    }

    if (index <= input.length) {
        console.log(`Welcome ${username}!`);
    }

}

// password(["Nakov", "1234", "Pass", "1324", "1234"]);
// password(["Gosho", "secret", "secret"]);