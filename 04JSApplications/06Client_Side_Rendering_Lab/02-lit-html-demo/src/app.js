import { render } from '../node_modules/lit-html/lit-html.js';
import { getContacts } from "./api.js";
import mainTemplate from "./templates/main.js";

const rootElement = document.querySelector('#root');

const contacts = await getContacts();

render(mainTemplate({ contacts, addContactHandler }), rootElement);

// Used only for demo
function addContactHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const person = formData.get('person');
    const phone = formData.get('phone');

    if (person == '' || phone == '') {
        return;
    }

    fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ person, phone })
    })
        .then(res => res.json())
        .then(contact => {
            contacts.push(contact);
            render(mainTemplate({ contacts, addContactHandler }), rootElement);
            e.target.reset();
        });
}