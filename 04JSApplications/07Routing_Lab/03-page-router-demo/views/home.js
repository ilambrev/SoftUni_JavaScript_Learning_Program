import { render, html } from "../node_modules/lit-html/lit-html.js";

const homeTemplate = () => html`
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eaque?</p>
`

const root = document.querySelector('#root');

export const homeView = (ctx) => {
    render(homeTemplate(), root);
};