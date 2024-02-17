window.addEventListener('load', solve);

function solve() {
    const infoForm = document.querySelector('#info-section form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const contactNumberInput = document.querySelector('#contact-number');
    const classTypeSelect = document.querySelector('#class-type');
    const classTimeSelect = document.querySelector('#class-time');
    const nextButton = document.querySelector('#next-btn');
    const previewSectionList = document.querySelector('#preview-section ul.class-info');
    const confirmSectionList = document.querySelector('#confirm-section ul.confirm-class');
    const mainContainer = document.querySelector('#main');
    const bodyContainer = document.querySelector('#body');

    infoForm.reset();

    nextButton.addEventListener('click', preview);

    function preview(e) {
        e.preventDefault();

        fullName = nameInput.value;
        email = emailInput.value;
        contactNumber = contactNumberInput.value;
        classType = classTypeSelect.value;
        classTime = classTimeSelect.value;

        if (fullName === '' || email === '' || contactNumber === '' || classType === '' || classTime === '') {
            return;
        }

        const infoListItem = document.createElement('li');
        infoListItem.classList.add('info-item');

        const infoArticle = document.createElement('article');
        infoArticle.classList.add('personal-info');

        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = fullName;

        const emailParagraph = document.createElement('p');
        emailParagraph.textContent = email;

        const numberParagraph = document.createElement('p');
        numberParagraph.textContent = contactNumber;

        const typeParagraph = document.createElement('p');
        typeParagraph.textContent = classType;

        const timeParagraph = document.createElement('p');
        timeParagraph.textContent = classTime;

        infoArticle.appendChild(nameParagraph);
        infoArticle.appendChild(emailParagraph);
        infoArticle.appendChild(numberParagraph);
        infoArticle.appendChild(typeParagraph);
        infoArticle.appendChild(timeParagraph);

        infoListItem.appendChild(infoArticle);

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', edit);

        const continueButton = document.createElement('button');
        continueButton.classList.add('continue-btn');
        continueButton.textContent = 'Continue';
        continueButton.addEventListener('click', moveToConfirm);

        infoListItem.appendChild(editButton);
        infoListItem.appendChild(continueButton);

        previewSectionList.appendChild(infoListItem);

        infoForm.reset();

        nextButton.disabled = true;
    }

    function edit(e) {
        const infoListItem = e.currentTarget.parentElement;

        const paragraphs = Array.from(infoListItem.querySelectorAll('p')).map(p => p.textContent);

        nameInput.value = paragraphs[0];
        emailInput.value = paragraphs[1];
        contactNumberInput.value = paragraphs[2];
        classTypeSelect.value = paragraphs[3];
        classTimeSelect.value = paragraphs[4];

        infoListItem.remove();

        nextButton.disabled = false;
    }

    function moveToConfirm(e) {
        const infoListItem = e.currentTarget.parentElement;
        const confirmListItem = infoListItem.cloneNode(true);

        confirmListItem.querySelector('.edit-btn').remove();
        confirmListItem.querySelector('.continue-btn').remove();

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-btn');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', cancel);

        const confirmButton = document.createElement('button');
        confirmButton.classList.add('confirm-btn');
        confirmButton.textContent = 'Confirm';
        confirmButton.addEventListener('click', confirm);

        confirmListItem.appendChild(cancelButton);
        confirmListItem.appendChild(confirmButton);

        infoListItem.remove();

        confirmSectionList.appendChild(confirmListItem);
    }

    function cancel(e) {
        const confirmListItem = e.currentTarget.parentElement;

        confirmListItem.remove();

        nextButton.disabled = false;
    }

    function confirm() {
        mainContainer.remove();

        const headingElement = document.createElement('h1');
        headingElement.setAttribute('id', 'thank-you');
        headingElement.textContent = 'Thank you for scheduling your appointment, we look forward to seeing you!';

        const doneButton = document.createElement('button');
        doneButton.setAttribute('id', 'done-btn');
        doneButton.textContent = 'Done';
        doneButton.addEventListener('click', () => location.reload());

        bodyContainer.appendChild(headingElement);
        bodyContainer.appendChild(doneButton);
    }
}