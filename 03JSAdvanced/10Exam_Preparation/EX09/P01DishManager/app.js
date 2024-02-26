window.addEventListener("load", solve);

function solve() {
    const dishManagerForm = document.querySelector('.form-wrapper form');
    const firstNameInput = document.querySelector('#first-name');
    const lastNameInput = document.querySelector('#last-name');
    const ageInput = document.querySelector('#age');
    const genderSelect = document.querySelector('#genderSelect');
    const dishDescriptionTextArea = document.querySelector('#task');
    const submitButton = document.querySelector('#form-btn');
    const inProgressList = document.querySelector('#in-progress');
    const counterElement = document.querySelector('#progress-count');
    const finishedList = document.querySelector('#finished');
    const clearButton = document.querySelector('#clear-btn');

    dishManagerForm.reset();

    submitButton.addEventListener('click', submit);
    clearButton.addEventListener('click', clear);

    function submit(e) {
        e.preventDefault();

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const age = ageInput.value;
        const gender = genderSelect.value;
        const dishDescription = dishDescriptionTextArea.value;

        if (firstName === '' || lastName === '' || age === '' || dishDescription === '') {
            return;
        }

        const dishListItem = document.createElement('li');
        dishListItem.classList.add('each-line');

        const articleElement = document.createElement('article');

        const namesHeading = document.createElement('h4');
        namesHeading.textContent = `${firstName} ${lastName}`;

        const genderAgeParagraph = document.createElement('p');
        genderAgeParagraph.textContent = `${gender}, ${age}`;

        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = `Dish description: ${dishDescription}`;

        articleElement.appendChild(namesHeading);
        articleElement.appendChild(genderAgeParagraph);
        articleElement.appendChild(descriptionParagraph);

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', edit);

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete-btn');
        completeButton.textContent = 'Mark as complete';
        completeButton.addEventListener('click', complete);

        dishListItem.appendChild(articleElement);
        dishListItem.appendChild(editButton);
        dishListItem.appendChild(completeButton);

        inProgressList.appendChild(dishListItem);

        counterElement.textContent = Number(counterElement.textContent) + 1;

        dishManagerForm.reset();
    }

    function edit(e) {
        const dishListItem = e.currentTarget.parentElement;

        const [firstName, lastName] = dishListItem.querySelector('h4').textContent.split(' ');
        const paragraphs = Array.from(dishListItem.querySelectorAll('p')).map(p => p.textContent);
        const [gender, age] = paragraphs[0].split(', ');

        firstNameInput.value = firstName;
        lastNameInput.value = lastName;
        ageInput.value = age;
        genderSelect.value = gender;
        dishDescriptionTextArea.value = paragraphs[1].replace('Dish description: ', '');

        counterElement.textContent = Number(counterElement.textContent) - 1;

        dishListItem.remove();
    }

    function complete(e) {
        const dishListItem = e.currentTarget.parentElement;
        const completedDishItem = dishListItem.cloneNode(true);

        completedDishItem.querySelector('.edit-btn').remove();
        completedDishItem.querySelector('.complete-btn').remove();

        finishedList.appendChild(completedDishItem);

        dishListItem.remove();

        counterElement.textContent = Number(counterElement.textContent) - 1;
    }

    function clear() {
        finishedList.textContent = '';
    }
}