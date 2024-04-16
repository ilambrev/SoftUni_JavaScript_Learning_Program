import { render } from '../node_modules/lit-html/lit-html.js';
import townsTemplate from './templates/towns.js';

const rootElement = document.querySelector('#root');
const form = document.querySelector('form.content')

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const towns = formData.get('towns').split(', ');

    if (towns == '') {
        return;
    }

    render(townsTemplate(towns), rootElement);

    e.target.reset();
}