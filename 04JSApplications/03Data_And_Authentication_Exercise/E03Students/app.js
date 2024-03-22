function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

    const studentDataForm = document.querySelector('#form');
    const resultsTableBody = document.querySelector('#results tbody');

    studentDataForm.addEventListener('submit', createStudent);

    loadAllStudents();

    async function createStudent(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const facultyNumber = formData.get('facultyNumber');
        const grade = formData.get('grade');

        try {
            const res = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    facultyNumber,
                    grade,
                }),
            });
        } catch (err) {
            console.log(err);
        }

        studentDataForm.reset();
        resultsTableBody.innerHTML = '';
        loadAllStudents();
    }

    async function loadAllStudents() {
        try {
            const res = await fetch(baseUrl);
            const studentsObject = await res.json();

            Object.values(studentsObject)
                .forEach(s => renderStudentData(s));
        } catch (err) {
            console.log(err);
        }
    }

    function renderStudentData(student) {
        const studentDataRow = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = `${student.firstName}`;

        const lastNameCell = document.createElement('td');
        lastNameCell.textContent = `${student.lastName}`;

        const facultyNumberCell = document.createElement('td');
        facultyNumberCell.textContent = `${student.facultyNumber}`;

        const gradeCell = document.createElement('td');
        gradeCell.textContent = `${Number(student.grade).toFixed(2)}`;

        studentDataRow.appendChild(firstNameCell);
        studentDataRow.appendChild(lastNameCell);
        studentDataRow.appendChild(facultyNumberCell);
        studentDataRow.appendChild(gradeCell);

        resultsTableBody.appendChild(studentDataRow);
    }
}

solve();