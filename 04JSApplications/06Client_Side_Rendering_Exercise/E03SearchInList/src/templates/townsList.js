import { html } from '../../node_modules/lit-html/lit-html.js';

const townsListTemplate = (townsList) => html`
    <ul>
        ${townsList.map(t => html`<li class=${t.matched ? "active" : ""}>${t.name}</li>`)}
    </ul>
`;

export default townsListTemplate;