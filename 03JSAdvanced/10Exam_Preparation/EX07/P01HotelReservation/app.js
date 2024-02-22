window.addEventListener('load', solve);

function solve() {
    const reservationForm = document.querySelector('#append-reservation form');
    const firstNameInput = document.querySelector('#first-name');
    const lastNameInput = document.querySelector('#last-name');
    const checkInInput = document.querySelector('#date-in');
    const checkOutInput = document.querySelector('#date-out');
    const guestsNumberInput = document.querySelector('#people-count');
    const nextButton = document.querySelector('#next-btn');
    const infoList = document.querySelector('#info-reservations ul.info-list');
    const confirmList = document.querySelector('#confirm-reservations ul.confirm-list');
    const reservationVerificationHeading = document.querySelector('#verification');

    nextButton.addEventListener('click', moveToReservationInfo);

    reservationForm.reset();

    function moveToReservationInfo(e) {
        e.preventDefault();

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const checkIn = checkInInput.value;
        const checkOut = checkOutInput.value;
        const guestsNumber = guestsNumberInput.value;

        if (firstName === '' || lastName === '' || checkIn === '' || checkOut === '' || guestsNumber === '' || Number(guestsNumber) <= 0) {
            return;
        }

        if (checkOut <= checkIn) {
            return;
        }

        const infoListItem = document.createElement('li');
        infoListItem.classList.add('reservation-content');

        const infoArticle = document.createElement('article');

        const nameHeading = document.createElement('h3');
        nameHeading.textContent = `Name: ${firstName} ${lastName}`;

        const checkInParagraph = document.createElement('p');
        checkInParagraph.textContent = `From date: ${checkIn}`;

        const checkOutParagraph = document.createElement('p');
        checkOutParagraph.textContent = `To date: ${checkOut}`;

        const guestsNumberParagraph = document.createElement('p');
        guestsNumberParagraph.textContent = `For ${guestsNumber} people`;

        infoArticle.appendChild(nameHeading);
        infoArticle.appendChild(checkInParagraph);
        infoArticle.appendChild(checkOutParagraph);
        infoArticle.appendChild(guestsNumberParagraph);

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', edit);

        const continueButton = document.createElement('button');
        continueButton.classList.add('continue-btn');
        continueButton.textContent = 'Continue';
        continueButton.addEventListener('click', moveToConfirm);

        infoListItem.appendChild(infoArticle);
        infoListItem.appendChild(editButton);
        infoListItem.appendChild(continueButton);

        infoList.appendChild(infoListItem);

        reservationForm.reset();

        nextButton.disabled = true;
    }

    function edit(e) {
        const infoArticle = e.currentTarget.parentElement.querySelector('article');
        const infoListItem = infoArticle.parentElement;

        const [firstName, lastName] = infoArticle.querySelector('h3').textContent.replace('Name: ', '').split(' ');
        const paragraphs = Array.from(infoArticle.querySelectorAll('p'));
        const checkIn = paragraphs[0].textContent.replace('From date: ', '');
        const checkOut = paragraphs[1].textContent.replace('To date: ', '');
        const guestsNumber = paragraphs[2].textContent.split(' ')[1];

        firstNameInput.value = firstName;
        lastNameInput.value = lastName;
        checkInInput.value = checkIn;
        checkOutInput.value = checkOut;
        guestsNumberInput.value = guestsNumber;

        infoListItem.remove();

        nextButton.disabled = false;
    }

    function moveToConfirm(e) {
        const infoListItem = e.currentTarget.parentElement;
        const confirmListItem = infoListItem.cloneNode(true);
        const confirmButton = confirmListItem.querySelector('.edit-btn');
        const cancelButton = confirmListItem.querySelector('.continue-btn');

        confirmButton.classList.remove('edit-btn');
        confirmButton.classList.add('confirm-btn');
        confirmButton.textContent = 'Confirm';
        confirmButton.addEventListener('click', verifyReservation);

        cancelButton.classList.remove('continue-btn');
        cancelButton.classList.add('cancel-btn');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', verifyReservation);

        infoListItem.remove();

        confirmList.appendChild(confirmListItem);
    }

    function verifyReservation(e) {
        const confirmListItem = e.currentTarget.parentElement;

        const buttonType = e.currentTarget.textContent;

        reservationVerificationHeading.className = '';

        switch (buttonType) {
            case 'Confirm':
                reservationVerificationHeading.classList.add('reservation-confirmed');
                reservationVerificationHeading.textContent = 'Confirmed.';
                break;
            case 'Cancel':
                reservationVerificationHeading.classList.add('reservation-cancelled');
                reservationVerificationHeading.textContent = 'Cancelled.';
                break;
        }

        confirmListItem.remove();

        nextButton.disabled = false;
    }
}