function formatGrade(grade) {

    let output = '';

    if (grade < 3.00) {

        output = 'Fail';

    } else if (grade < 3.50) {

        output = 'Poor';

    } else if (grade < 4.50) {

        output = 'Good';

    } else if (grade < 5.50) {

        output = 'Very good';

    } else {

        output = 'Excellent';

    }

    output = grade < 3.00 ? output + ' (2)' : output + ` (${grade.toFixed(2)})`;

    console.log(output);

}

// formatGrade(3.33);
// formatGrade(4.50);
// formatGrade(2.99);