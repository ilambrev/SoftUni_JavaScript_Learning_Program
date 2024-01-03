window.addEventListener('load', solve);

function solve() {

    let firstNameInput = document.querySelector('#first-name');
    let lastNameInput = document.querySelector('#last-name');
    let numberOfPeopleInput = document.querySelector('#people-count');
    let fromDateInput = document.querySelector('#from-date');
    let daysCountInput = document.querySelector('#days-count');

    let infoList = document.querySelector('#info-ticket .ticket-info-list');
    let confirmList = document.querySelector('#confirm-ticket-section .confirm-ticket');
    let pageMain = document.querySelector('#main');
    let pageBody = document.querySelector('#body');

    let nextStepButton = document.querySelector('#next-btn');

    let ticket = { firstName: '', lastName: '', numberOfPeople: '', fromDate: '', daysCount: '' };

    nextStepButton.addEventListener('click', (e) => {
        e.preventDefault();

        buyTicket();
    });

    function buyTicket() {

        ticket.firstName = firstNameInput.value;
        ticket.lastName = lastNameInput.value;
        ticket.numberOfPeople = numberOfPeopleInput.value;
        ticket.fromDate = fromDateInput.value;
        ticket.daysCount = daysCountInput.value;

        if (ticket.firstName === '' || ticket.lastName === '' || ticket.numberOfPeople === '' || ticket.fromDate === '' || ticket.daysCount === '') {
            return;
        }

        if (Number(ticket.numberOfPeople) <= 0 || Number(ticket.daysCount) <= 0) {
            return;
        }

        let ticketListItemElement = document.createElement('li');
        ticketListItemElement.classList.add('ticket');

        let ticketArticleElement = document.createElement('article');

        let nameHeading = document.createElement('h3');
        nameHeading.textContent = `Name: ${ticket.firstName} ${ticket.lastName}`;

        let dateParagraphElement = document.createElement('p');
        dateParagraphElement.textContent = `From date: ${ticket.fromDate}`;

        let daysParagraphElement = document.createElement('p');
        daysParagraphElement.textContent = `For ${ticket.daysCount} days`;

        let peopleParagraphElement = document.createElement('p');
        peopleParagraphElement.textContent = `For ${ticket.numberOfPeople} people`;

        ticketArticleElement.appendChild(nameHeading);
        ticketArticleElement.appendChild(dateParagraphElement);
        ticketArticleElement.appendChild(daysParagraphElement);
        ticketArticleElement.appendChild(peopleParagraphElement);

        let editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', editTicket);

        let continueButton = document.createElement('button');
        continueButton.classList.add('continue-btn');
        continueButton.textContent = 'Continue';
        continueButton.addEventListener('click', moveTicketToConfirmList);

        ticketListItemElement.appendChild(ticketArticleElement);
        ticketListItemElement.appendChild(editButton);
        ticketListItemElement.appendChild(continueButton);

        infoList.appendChild(ticketListItemElement);

        firstNameInput.value = '';
        lastNameInput.value = '';
        numberOfPeopleInput.value = '';
        fromDateInput.value = '';
        daysCountInput.value = '';

        nextStepButton.disabled = true;

    }

    function editTicket(e) {

        firstNameInput.value = ticket.firstName;
        lastNameInput.value = ticket.lastName;
        numberOfPeopleInput.value = ticket.numberOfPeople;
        fromDateInput.value = ticket.fromDate;
        daysCountInput.value = ticket.daysCount;

        nextStepButton.disabled = false;

        infoList.innerHTML = '';

    }

    function moveTicketToConfirmList() {

        let confirmTicketArticleElement = infoList.querySelector('article');

        let ticketContenteListItemElement = document.createElement('li')
        ticketContenteListItemElement.classList.add('ticket-content');

        let confirmButton = document.createElement('button');
        confirmButton.classList.add('confirm-btn');
        confirmButton.textContent = 'Confirm';
        confirmButton.addEventListener('click', confirmTicket);

        let cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-btn');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', cancelTicket);

        ticketContenteListItemElement.appendChild(confirmTicketArticleElement);
        ticketContenteListItemElement.appendChild(confirmButton);
        ticketContenteListItemElement.appendChild(cancelButton);

        confirmList.appendChild(ticketContenteListItemElement);

        infoList.innerHTML = '';

    }

    function confirmTicket() {

        pageMain.remove();

        let messageHeadingElement = document.createElement('h1');
        messageHeadingElement.setAttribute('id', 'thank-you');
        messageHeadingElement.textContent = 'Thank you, have a nice day!';

        let backButton = document.createElement('button');
        backButton.setAttribute('id', 'back-btn');
        backButton.textContent = 'Back';
        backButton.addEventListener('click', reloadPage);

        pageBody.appendChild(messageHeadingElement);
        pageBody.appendChild(backButton);

    }

    function cancelTicket() {

        confirmList.innerHTML = '';

        nextStepButton.disabled = false;

    }

    function reloadPage(e) {
        e.preventDefault();
        location.reload();
    }

}