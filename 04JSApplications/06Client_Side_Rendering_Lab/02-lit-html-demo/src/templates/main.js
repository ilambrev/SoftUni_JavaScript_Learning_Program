import { html } from '../../node_modules/lit-html/lit-html.js';

import navbarTemplate from "./navbar.js";
import contactListTemplate from "./contactList.js";

const mainTemplate = ({ addContactHandler, contacts }) => html`
    <header>
        ${navbarTemplate(addContactHandler)}
    </header>
    <main>
        ${contactListTemplate(contacts)}
    </main>
`;

export default mainTemplate;