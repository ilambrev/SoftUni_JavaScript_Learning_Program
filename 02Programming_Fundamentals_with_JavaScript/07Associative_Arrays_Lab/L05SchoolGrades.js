function schoolGrades(input) {

    let students = new Map();

    for (let line of input) {

        let studentsData = line.split(' ');
        let studentName = studentsData[0];
        let studentGrades = studentsData.slice(1).map(grade => Number(grade));

        students.has(studentName) ? students.set(studentName, students.get(studentName).concat(studentGrades)) : students.set(studentName, studentGrades);

    }

    let sortedStudents = Array.from(students.entries()).sort(([name1], [name2]) => name1.localeCompare(name2));

    for (let [name, grades] of sortedStudents) {

        let averageGrade = grades.reduce((g1, g2) => g1 + g2) / grades.length;

        console.log(`${name}: ${averageGrade.toFixed(2)}`);

    }

}

// schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
// schoolGrades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);