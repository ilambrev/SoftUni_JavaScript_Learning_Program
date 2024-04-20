import { html } from '../../node_modules/lit-html/lit-html.js';
import rowTemplate from './row.js';

export const rowsTemplate = (rowsData) => html`
    ${rowsData.map(rowTemplate)}
`;

export default rowsTemplate;