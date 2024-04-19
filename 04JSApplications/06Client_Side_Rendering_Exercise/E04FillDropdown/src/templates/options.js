import { html } from '../../node_modules/lit-html/lit-html.js';

const optionsTemplate = (options) => html`
    ${options.map(option => html`<option value="${option._id}">${option.text}</option>`)}
`;

export default optionsTemplate;