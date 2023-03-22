function loadingBar(number) {

    let generateBar = function (number) {

        let bar = '';

        let percentageSignsNumber = 10 - (10 - number / 10);

        if (percentageSignsNumber === 10) {

            bar = '100% Complete!' + '\n' + '[' + '%'.repeat(10) + ']';

        } else {

            bar = number + '% ' + '[' + '%'.repeat(percentageSignsNumber) + '.'.repeat(10 - percentageSignsNumber) + ']' + '\n' + 'Still loading...';

        }

        return bar;

    }

    console.log(generateBar(number));

}

// loadingBar(30);
// loadingBar(50);
// loadingBar(100);