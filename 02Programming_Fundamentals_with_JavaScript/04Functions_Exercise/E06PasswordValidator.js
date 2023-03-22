function passwordValidator(password) {

    let isPasswordValid = true;

    let checkIfPasswordContainsLettersAndDigits = function (password) {

        for (let i = 0; i < password.length; i++) {

            let charValue = password.charCodeAt(i);

            if (charValue < 48 || (charValue > 57 && charValue < 65) || (charValue > 90 && charValue < 97) || charValue > 122) {

                return false;

            }

        }

        return true;

    }

    let checkIfPosswordContainsTwoDigits = function (password) {

        let digitsCount = 0;

        for (let i = 0; i < password.length; i++) {

            let charValue = password.charCodeAt(i);

            if (charValue >= 48 && charValue <= 57) {

                digitsCount++;

            }

            if (digitsCount === 2) {

                break;

            }

        }

        return digitsCount === 2;

    }

    if (password.length < 6 || password.length > 10) {

        isPasswordValid = false;
        console.log('Password must be between 6 and 10 characters');

    }

    if (!checkIfPasswordContainsLettersAndDigits(password)) {

        isPasswordValid = false;
        console.log('Password must consist only of letters and digits');

    }

    if (!checkIfPosswordContainsTwoDigits(password)) {

        isPasswordValid = false;
        console.log('Password must have at least 2 digits');

    }

    if (isPasswordValid) {

        console.log('Password is valid');

    }

}

// passwordValidator('logIn');
// passwordValidator('MyPass123');
// passwordValidator('Pa$s$s');