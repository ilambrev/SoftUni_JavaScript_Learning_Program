function graduation(input) {
    let studentName = input[0];
    let grade = 0;
    let lowMarksNumber = 0;
    let marksSum = 0;

    while (grade < 12) {

        let currentMark = Number(input[grade + 1]);

        if (currentMark >= 4.00) {
            marksSum += currentMark;
        } else {
            lowMarksNumber++;
        }

        if (lowMarksNumber > 1) {
            break;
        }

        grade++;
    }

    if (grade === 12) {
        console.log(`${studentName} graduated. Average grade: ${(marksSum / 12).toFixed(2)}`);
    } else {
        console.log(`${studentName} has been excluded at ${grade} grade`)
    }

}

// graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
// graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);