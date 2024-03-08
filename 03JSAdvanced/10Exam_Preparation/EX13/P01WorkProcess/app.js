function solve() {
    const hireWorkerForm = document.querySelector('#signup form');
    const firstNameInput = document.querySelector('#fname');
    const lastNameInput = document.querySelector('#lname');
    const emailInput = document.querySelector('#email');
    const birthDateInput = document.querySelector('#birth');
    const positionInput = document.querySelector('#position');
    const salaryInput = document.querySelector('#salary');
    const hireWorkerButton = document.querySelector('#add-worker');
    const workersTableBody = document.querySelector('#tbody');
    const salaryBudgetSum = document.querySelector('#sum');

    hireWorkerForm.reset();

    hireWorkerButton.addEventListener('click', addWorker);

    function addWorker(e) {
        e.preventDefault();

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const email = emailInput.value;
        const birthDate = birthDateInput.value;
        const position = positionInput.value;
        const salary = salaryInput.value;

        if (firstName === '' || lastName === '' || email === '' || birthDate === '' || position === '' || salary === '') {
            return;
        }

        const tableRow = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = firstName;

        const lastNameCell = document.createElement('td');
        lastNameCell.textContent = lastName;

        const emailCell = document.createElement('td');
        emailCell.textContent = email;

        const birthDateCell = document.createElement('td');
        birthDateCell.textContent = birthDate;

        const positionCell = document.createElement('td');
        positionCell.textContent = position;

        const salaryCell = document.createElement('td');
        salaryCell.textContent = salary;

        const buttonsCell = document.createElement('td');

        const firedButton = document.createElement('button');
        firedButton.textContent = 'Fired';
        firedButton.classList.add('fired');
        firedButton.addEventListener('click', fireWorker);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', editWorker);

        buttonsCell.appendChild(firedButton);
        buttonsCell.appendChild(editButton);

        tableRow.appendChild(firstNameCell);
        tableRow.appendChild(lastNameCell);
        tableRow.appendChild(emailCell);
        tableRow.appendChild(birthDateCell);
        tableRow.appendChild(positionCell);
        tableRow.appendChild(salaryCell);
        tableRow.appendChild(buttonsCell);

        workersTableBody.appendChild(tableRow);

        salaryBudgetSum.textContent = (Number(salaryBudgetSum.textContent) + Number(salary)).toFixed(2);

        hireWorkerForm.reset();
    }

    function editWorker(e) {
        const tableRow = e.currentTarget.parentElement.parentElement;

        const [firstName, lastName, email, birthDate, position, salary] = Array.from(tableRow.querySelectorAll('td'))
            .slice(0, 6).map(c => c.textContent);

        firstNameInput.value = firstName;
        lastNameInput.value = lastName;
        emailInput.value = email;
        birthDateInput.value = birthDate;
        positionInput.value = position;
        salaryInput.value = salary;

        salaryBudgetSum.textContent = (Number(salaryBudgetSum.textContent) - Number(salary)).toFixed(2);

        tableRow.remove();
    }

    function fireWorker(e) {
        const tableRow = e.currentTarget.parentElement.parentElement;

        const salary = tableRow.querySelector('td:nth-of-type(6)').textContent;

        salaryBudgetSum.textContent = (Number(salaryBudgetSum.textContent) - Number(salary)).toFixed(2);

        tableRow.remove();
    }
}

solve()