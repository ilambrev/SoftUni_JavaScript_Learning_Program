import { render, html } from "../node_modules/lit-html/lit-html.js";

const aboutTemplate = () => html`
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eaque?</p>
`

const root = document.querySelector('#root');

export const aboutView = (ctx) => {
    render(aboutTemplate(), root);
};