function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    const phoneBookList = document.querySelector('#phonebook');
    const personNameInput = document.querySelector('#person');
    const phoneNumberInput = document.querySelector('#phone');
    const loadButton = document.querySelector('#btnLoad');
    const createButton = document.querySelector('#btnCreate');

    loadButton.addEventListener('click', loadAllPhonebookEntries);
    createButton.addEventListener('click', createContact);

    async function loadAllPhonebookEntries() {
        phoneBookList.textContent = '';
        try {
            const res = await fetch(baseUrl);
            const phonebookObject = await res.json();

            Object.values(phonebookObject)
                .forEach(contact => renderContact(contact));
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteContact(e) {
        const contactListItem = e.currentTarget.parentElement;
        const id = contactListItem.dataset.id;
        try {
            const res = await fetch(`${baseUrl}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: null,
            });

            contactListItem.remove();
        } catch (err) {
            console.log(err);
        }
    }

    async function createContact() {
        const person = personNameInput.value;
        const phone = phoneNumberInput.value;
        try {
            const res = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    person,
                    phone,
                }),
            });

            personNameInput.value = '';
            phoneNumberInput.value = '';

            loadAllPhonebookEntries();
        } catch (err) {
            console.log(err);
        }
    }

    function renderContact(contact) {
        const contactListItem = document.createElement('li');
        contactListItem.textContent = `${contact.person}: ${contact.phone}`;
        contactListItem.dataset.id = `${contact._id}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteContact);

        contactListItem.appendChild(deleteButton);

        phoneBookList.appendChild(contactListItem);
    }
}

attachEvents();