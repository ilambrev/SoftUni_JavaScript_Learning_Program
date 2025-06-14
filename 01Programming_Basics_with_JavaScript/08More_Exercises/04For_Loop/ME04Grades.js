function grades(input) {
    const students = Number(input[0]);
    let sumOfGrades = 0;
    let topStudents = 0;
    let goodStudents = 0;
    let passedStudents = 0;
    let failedStudents = 0;

    for (let i = 1; i <= students; i++) {
        const grade = Number(input[i]);
        sumOfGrades += grade;

        if (grade < 3) {
            failedStudents++;
        } else if (grade < 4) {
            passedStudents++;
        } else if (grade < 5) {
            goodStudents++;
        } else {
            topStudents++;
        }
    }

    console.log(`Top students: ${((topStudents / students) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((goodStudents / students) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((passedStudents / students) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((failedStudents / students) * 100).toFixed(2)}%`);
    console.log(`Average: ${(sumOfGrades / students).toFixed(2)}`);
}

// grades(['10', '3.00', '2.99', '5.68', '3.01', '4', '4', '6.00', '4.50', '2.44', '5']);
// grades((['6', '2', '3', '4', '5', '6', '2.2']));