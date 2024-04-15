import { html } from '../../node_modules/lit-html/lit-html.js';

import contactTemplate from './contact.js'

const contactListTemplate = (contacts) => html`
    <div class="contact-list" style="display: flex; flex: none; flex-wrap: wrap; justify-content: center; gap: 20px; margin-top: 20px"">
        ${contacts.map(c => html`${contactTemplate(c)}`)}
    </div>
`;

export default contactListTemplate;