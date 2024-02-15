window.addEventListener('load', solution);

function solution() {
    const addForm = document.querySelector('#add-problem form');
    const employeeInput = document.querySelector('#employee');
    const categorySelect = document.querySelector('#category');
    const urgencySelect = document.querySelector('#urgency');
    const teamSelect = document.querySelector('#team');
    const descriptionInput = document.querySelector('#description');
    const addButton = document.querySelector('#add-btn');
    const previewList = document.querySelector('#preview ul.preview-list');
    const pedndingList = document.querySelector('#pending ul.pending-list');
    const resolvedList = document.querySelector('#resolved ul.resolved-list');

    addButton.addEventListener('click', addProblem);

    addForm.reset();

    function addProblem(e) {
        e.preventDefault();

        const employee = employeeInput.value;
        const category = categorySelect.value;
        const urgency = urgencySelect.value;
        const team = teamSelect.value;
        const description = descriptionInput.value;

        if (employee === '' || category === '' || urgency === '' || team === '' || description === '') {
            return;
        }

        const problemListItem = document.createElement('li');
        problemListItem.classList.add('problem-content');

        const problemArticle = document.createElement('article');

        const employeeParagraph = document.createElement('p');
        employeeParagraph.textContent = `From: ${employee}`;

        const categoryParagraph = document.createElement('p');
        categoryParagraph.textContent = `Category: ${category}`;

        const urgencyParagraph = document.createElement('p');
        urgencyParagraph.textContent = `Urgency: ${urgency}`;

        const teamParagraph = document.createElement('p');
        teamParagraph.textContent = `Assigned to: ${team}`;

        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = `Description: ${description}`;

        problemArticle.appendChild(employeeParagraph);
        problemArticle.appendChild(categoryParagraph);
        problemArticle.appendChild(urgencyParagraph);
        problemArticle.appendChild(teamParagraph);
        problemArticle.appendChild(descriptionParagraph);

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', editProblem);

        const continueButton = document.createElement('button');
        continueButton.classList.add('continue-btn');
        continueButton.textContent = 'Continue';
        continueButton.addEventListener('click', addToPending);

        problemListItem.appendChild(problemArticle);
        problemListItem.appendChild(editButton);
        problemListItem.appendChild(continueButton);

        previewList.appendChild(problemListItem);

        addForm.reset();

        addButton.disabled = true;
    }

    function editProblem(e) {
        const problemListItem = e.currentTarget.parentElement;
        const paragraphs = Array.from(problemListItem.querySelectorAll('p'));

        employeeInput.value = paragraphs[0].textContent.replace('From: ', '');
        categorySelect.value = paragraphs[1].textContent.replace('Category: ', '');
        urgencySelect.value = paragraphs[2].textContent.replace('Urgency: ', '');
        teamSelect.value = paragraphs[3].textContent.replace('Assigned to: ', '');
        descriptionInput.value = paragraphs[4].textContent.replace('Description: ', '');

        problemListItem.remove();

        addButton.disabled = false;
    }

    function addToPending(e) {
        const problemListItem = e.currentTarget.parentElement;
        const pendingListItem = problemListItem.cloneNode(true);

        pendingListItem.querySelector('.edit-btn').remove();
        pendingListItem.querySelector('.continue-btn').remove();

        const resolvedButton = document.createElement('button');
        resolvedButton.classList.add('resolve-btn');
        resolvedButton.textContent = 'Resolved';
        resolvedButton.addEventListener('click', addToResolved);

        pendingListItem.appendChild(resolvedButton);
        pedndingList.appendChild(pendingListItem);

        problemListItem.remove();
    }

    function addToResolved(e) {
        const pendingListItem = e.currentTarget.parentElement;
        const resolvedListItem = pendingListItem.cloneNode(true);

        resolvedListItem.querySelector('.resolve-btn').remove();

        const clearButton = document.createElement('button');
        clearButton.classList.add('clear-btn');
        clearButton.textContent = 'Clear';
        clearButton.addEventListener('click', clearProblem);

        resolvedListItem.appendChild(clearButton);
        resolvedList.appendChild(resolvedListItem);

        pendingListItem.remove();
    }

    function clearProblem(e) {
        const resolvedListItem = e.currentTarget.parentElement;

        resolvedListItem.remove();
    }
}