import { render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './data/catSeeder.js';
import catsTemplate from './templates/cats.js';

const allCatsSection = document.querySelector('#allCats');

cats.map(cat => cat.showStatusCode = true);

render(catsTemplate(cats, toggle), allCatsSection);

function toggle(e) {
    const catId = e.currentTarget.parentElement.querySelector('.status').id;
    const cat = cats.find(c => c.id === catId);
    cat.showStatusCode = !cat.showStatusCode;
    render(catsTemplate(cats, toggle), allCatsSection);
}