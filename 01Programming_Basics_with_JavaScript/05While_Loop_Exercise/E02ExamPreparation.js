function examPreparation(input) {

    let poorGradesMaxNumber = Number(input[0]);
    let taskName = "";
    let poorGradesCount = 0;
    let gradesCount = 0;
    let index = 1;
    let isPoorGradesMaxNumberReached = false;
    let gradesSum = 0;

    while (taskName !== "Enough") {
        let currentGrade = Number(input[index + 1]);

        if (currentGrade <= 4.00) {
            poorGradesCount++;
        }

        if (poorGradesCount === poorGradesMaxNumber) {
            isPoorGradesMaxNumberReached = true;
            break;
        }

        gradesSum += currentGrade;
        gradesCount++;
        index += 2;
        taskName = input[index];
    }

    if (isPoorGradesMaxNumberReached) {
        console.log(`You need a break, ${poorGradesCount} poor grades.`);
    } else {
        console.log(`Average score: ${(gradesSum / gradesCount).toFixed(2)}`);
        console.log(`Number of problems: ${gradesCount}`);
        console.log(`Last problem: ${input[index - 2]}`);
    }

}

// examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
// examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);