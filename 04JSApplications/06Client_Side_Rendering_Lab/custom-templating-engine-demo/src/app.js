import { getContacts } from "./api.js";
import { render } from "./render.js";
import navbarTemplate from "./templates/navbar.js";
import contactListTemplate from "./templates/contactList.js";

const rootElement = document.querySelector('#root');

const navbarTemplateResult = navbarTemplate();

render(navbarTemplateResult, rootElement);

const contacts = await getContacts();

render(contactListTemplate(contacts), rootElement);