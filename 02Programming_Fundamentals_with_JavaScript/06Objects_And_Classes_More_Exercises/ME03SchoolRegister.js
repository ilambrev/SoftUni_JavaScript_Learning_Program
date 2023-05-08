function schoolRegister(input) {

    let students = [];

    for (let line of input) {

        let studentData = line.split(', ');
        let name = studentData[0].split(': ')[1];
        let grade = Number(studentData[1].split(': ')[1]);
        let score = Number(studentData[2].split(': ')[1]);

        let student = {
            'name': name,
            'grade': grade,
            'score': score,
        }

        students.push(student);

    }

    let studentsSorted = students
        .filter(student => student.score >= 3.00)
        .sort((student1, student2) => student1.grade - student2.grade);

    while (studentsSorted.length > 0) {

        let grade = studentsSorted[0].grade;
        let studentsWithGrade = studentsSorted
            .filter(student => student.grade === grade);
        let averageGrade = studentsWithGrade
            .map(student => student.score)
            .reduce((score1, score2) => score1 + score2) / studentsWithGrade.length;

        console.log(`${grade + 1} Grade`);
        console.log('List of students: ' + studentsWithGrade.map(student => student.name).join(', '));
        console.log(`Average annual score from last year: ${averageGrade.toFixed(2)}\n`);

        studentsSorted.splice(0, studentsWithGrade.length);

    }

}

/*
schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);

schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]);
*/