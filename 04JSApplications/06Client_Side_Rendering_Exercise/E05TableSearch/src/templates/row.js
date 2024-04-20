import { html } from '../../node_modules/lit-html/lit-html.js';
import { classMap } from '../../node_modules/lit-html/directives/class-map.js'

export const rowTemplate = (row) => html`
    <tr class=${classMap({ 'select': row.matched })}>
        <td>${row.firstName} ${row.lastName}</td>
        <td>${row.email}</td>
        <td>${row.course}</td>
    </tr>
`;

export default rowTemplate;