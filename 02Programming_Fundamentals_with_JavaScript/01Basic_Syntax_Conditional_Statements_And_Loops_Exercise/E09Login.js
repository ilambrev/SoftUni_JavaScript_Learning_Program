function login(input) {

    let username = input[0];
    let isUserLogged = false;

    for (let i = 1; i < input.length; i++) {

        let password = input[i];
        let revercedPassword = '';

        for (let j = password.length - 1; j >= 0; j--) {

            revercedPassword += password.charAt(j);
        }

        if (revercedPassword === username) {
            console.log(`User ${username} logged in.`);
            isUserLogged = true;
            break;
        } else {
            if (i <= 3) {
                console.log('Incorrect password. Try again.');
            } else {
                break;
            }

        }

        if (isUserLogged) {
            break;
        }

    }

    if (!isUserLogged) {
        console.log(`User ${username} blocked!`);
    }

}

// login(['Acer', 'login', 'go', 'let me in', 'recA']);
// login(['momo', 'omom']);
// login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);