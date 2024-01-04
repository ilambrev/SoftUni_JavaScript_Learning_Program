window.addEventListener('load', solve);

function solve() {
    const timeInputField = document.querySelector('#time');
    const dateInputField = document.querySelector('#date');
    const placeInputField = document.querySelector('#place');
    const eventInputField = document.querySelector('#event-name');
    const contactsInputField = document.querySelector('#email');
    const addEventButton = document.querySelector('#add-btn');
    const clearButton = document.querySelector('#clear');
    const lastCheckedUnorderedList = document.querySelector('#check-list');
    const upcomingUnorderedList = document.querySelector('#upcoming-list');
    const finishedUnorderedList = document.querySelector('#finished-list');

    resetForm();

    addEventButton.addEventListener('click', addEvent);
    clearButton.addEventListener('click', clear);

    function addEvent() {
        const time = timeInputField.value;
        const date = dateInputField.value;
        const place = placeInputField.value;
        const event = eventInputField.value;
        const email = contactsInputField.value;

        if (time === '' || date === '' || place === '' || event === '' || email === '') {
            return;
        }

        const listItemElement = document.createElement('li');
        listItemElement.classList.add('event-content');

        const articleElement = document.createElement('article');

        const dateTimeParagraphElement = document.createElement('p');
        dateTimeParagraphElement.textContent = `Begins: ${date} at: ${time}`;

        const placeParagraphElement = document.createElement('p');
        placeParagraphElement.textContent = `In: ${place}`;

        const eventParagraphElement = document.createElement('p');
        eventParagraphElement.textContent = `Event: ${event}`;

        const contactParagraphElement = document.createElement('p');
        contactParagraphElement.textContent = `Contact: ${email}`;

        articleElement.appendChild(dateTimeParagraphElement);
        articleElement.appendChild(placeParagraphElement);
        articleElement.appendChild(eventParagraphElement);
        articleElement.appendChild(contactParagraphElement);

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', edit);

        const continueButton = document.createElement('button');
        continueButton.classList.add('continue-btn');
        continueButton.textContent = 'Continue';
        continueButton.addEventListener('click', continueToUpcoming);

        listItemElement.appendChild(articleElement);
        listItemElement.appendChild(editButton);
        listItemElement.appendChild(continueButton);

        lastCheckedUnorderedList.appendChild(listItemElement);

        addEventButton.disabled = true;

        resetForm();
    }

    function resetForm() {
        timeInputField.value = '';
        dateInputField.value = '';
        placeInputField.value = '';
        eventInputField.value = '';
        contactsInputField.value = '';
    }

    function edit(e) {
        let dateTime = e.currentTarget.parentElement.querySelector('p:nth-of-type(1)').textContent;
        dateTime = dateTime.replace('Begins: ', '');
        dateTime = dateTime.replace('at: ', '');
        dateTime = dateTime.trim().split(' ');

        timeInputField.value = dateTime[1];
        dateInputField.value = dateTime[0];
        placeInputField.value = e.currentTarget.parentElement.querySelector('p:nth-of-type(2)').textContent.replace('In: ', '').trim();
        eventInputField.value = e.currentTarget.parentElement.querySelector('p:nth-of-type(3)').textContent.replace('Event: ', '').trim();
        contactsInputField.value = e.currentTarget.parentElement.querySelector('p:nth-of-type(4)').textContent.replace('Contact: ', '').trim();

        e.currentTarget.parentElement.remove();

        addEventButton.disabled = false;
    }

    function continueToUpcoming(e) {
        const listItemElement = e.currentTarget.parentElement.cloneNode(true);

        listItemElement.querySelector('.edit-btn').remove();
        listItemElement.querySelector('.continue-btn').remove();

        const moveToFinishedButton = document.createElement('button');
        moveToFinishedButton.classList.add('finished-btn');
        moveToFinishedButton.textContent = 'Move to Finished';
        moveToFinishedButton.addEventListener('click', finish);

        listItemElement.appendChild(moveToFinishedButton);

        upcomingUnorderedList.appendChild(listItemElement);

        e.currentTarget.parentElement.remove();

        addEventButton.disabled = false;
    }

    function finish(e) {
        const listItemElement = e.currentTarget.parentElement.cloneNode(true);

        listItemElement.querySelector('.finished-btn').remove();

        finishedUnorderedList.appendChild(listItemElement);

        e.currentTarget.parentElement.remove();
    }

    function clear() {
        finishedUnorderedList.textContent = '';
    }

}