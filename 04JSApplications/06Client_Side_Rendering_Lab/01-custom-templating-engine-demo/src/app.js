import { getContacts } from "./api.js";
import { render } from "./render.js";
import mainTemplate from "./templates/main.js";

const rootElement = document.querySelector('#root');

const contacts = await getContacts();

render(mainTemplate({ contacts }), rootElement);

// Used only for demo
window.addContact = function () {
    const contactInfo = prompt("Enter new contact data in format name/phone number:", "");

    if (contactInfo == null || contactInfo == "") {
        return;
    }

    const [person, phone] = contactInfo.split('/');

    fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ person, phone })
    })
        .then(res => res.json())
        .then(contact => {
            render(mainTemplate({ contacts: [...contacts, contact] }), rootElement);
        });
}