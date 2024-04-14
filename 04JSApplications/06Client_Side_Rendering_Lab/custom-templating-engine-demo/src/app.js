import { getContacts } from "./api.js";
import { render } from "./render.js";
import mainTemplate from "./templates/main.js";

const rootElement = document.querySelector('#root');

const contacts = await getContacts();

render(mainTemplate({ contacts }), rootElement);

// Used only for demo
window.addContact = function () {
    fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ person: 'Ivan', phone: '+1-555-7635' })
    })
        .then(res => res.json())
        .then(contact => {
            render(mainTemplate({ contacts: [...contacts, contact] }), rootElement);
        });
}