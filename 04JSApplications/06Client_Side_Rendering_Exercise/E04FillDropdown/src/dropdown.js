import { render } from '../node_modules/lit-html/lit-html.js';
import { getOptions, addOption } from './api.js';
import optionsTemplate from './templates/options.js';

const menu = document.querySelector('#menu');
const form = document.querySelector('form');
const textInput = document.querySelector('#itemText');

form.addEventListener('submit', addItem);

showOptions();

async function showOptions() {
    const options = await getOptions()
        .then(res => res.json());

    render(optionsTemplate(Object.values(options)), menu);
}

async function addItem(e) {
    e.preventDefault();

    const text = textInput.value;

    if (text === '') {
        return;
    }

    form.reset();

    const option = await addOption({ text })
        .then(res => res.json());

    if (option) {
        showOptions();
    }
}