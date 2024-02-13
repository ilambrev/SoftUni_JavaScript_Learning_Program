function solve() {
    const taskImput = document.querySelector('#task');
    const descriptionTextArea = document.querySelector('#description');
    const dateInput = document.querySelector('#date');
    const addButton = document.querySelector('#add');
    const openSectionArticleContainer = document.querySelector('h1.orange').parentElement.nextElementSibling;
    const inProgressSectionArticleContainer = document.querySelector('h1.yellow').parentElement.nextElementSibling;
    const completeSectionArticleContainer = document.querySelector('h1.green').parentElement.nextElementSibling;

    addButton.addEventListener('click', addTask);

    clearForm();

    function addTask(e) {
        e.preventDefault();

        const task = taskImput.value;
        const description = descriptionTextArea.value;
        const date = dateInput.value;

        if (task === '' || description === '' || date === '') {
            return;
        }

        const articleElement = document.createElement('article');

        const taskHeading = document.createElement('h3');
        taskHeading.textContent = task;

        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = `Description: ${description}`;

        const dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Due Date: ${date}`;

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('flex');

        const startButton = document.createElement('button');
        startButton.textContent = 'Start';
        startButton.classList.add('green');
        startButton.addEventListener('click', moveTask);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('red');
        deleteButton.addEventListener('click', deleteTask);

        buttonsContainer.appendChild(startButton);
        buttonsContainer.appendChild(deleteButton);

        articleElement.appendChild(taskHeading);
        articleElement.appendChild(descriptionParagraph);
        articleElement.appendChild(dateParagraph);
        articleElement.appendChild(buttonsContainer);

        openSectionArticleContainer.appendChild(articleElement);

        clearForm();
    }

    function moveTask(e) {
        const taskArticle = e.currentTarget.parentElement.parentElement;
        const modifiedTaskArticle = taskArticle.cloneNode(true);

        taskArticle.remove();

        const finishButton = modifiedTaskArticle.querySelector('.red');
        finishButton.classList.remove('red');
        finishButton.classList.add('orange');
        finishButton.textContent = 'Finish';
        finishButton.addEventListener('click', completeTask);

        const deleteButton = modifiedTaskArticle.querySelector('.green');
        deleteButton.classList.remove('green');
        deleteButton.classList.add('red');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTask);

        inProgressSectionArticleContainer.appendChild(modifiedTaskArticle);
    }

    function deleteTask(e) {
        const taskArticle = e.currentTarget.parentElement.parentElement;

        taskArticle.remove();
    }

    function completeTask(e) {
        const taskArticle = e.currentTarget.parentElement.parentElement;
        const modifiedTaskArticle = taskArticle.cloneNode(true);

        taskArticle.remove();

        modifiedTaskArticle.querySelector('.orange').parentElement.remove();
        
        completeSectionArticleContainer.appendChild(modifiedTaskArticle);
    }

    function clearForm() {
        taskImput.value = '';
        descriptionTextArea.value = '';
        dateInput.value = '';
    }
}