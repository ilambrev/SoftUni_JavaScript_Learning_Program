import { detailsPage } from './details.js';
import { showView, spinner, updateNav } from './util.js';

const url = 'http://localhost:3030/data/movies'
const section = document.querySelector('#home-page');
const catalog = section.querySelector('#movie #movies-list');

catalog.addEventListener('click', (e) => {
if (e.target.tagName === 'BUTTON') {
    e.preventDefault();
    const id = e.target.dataset.id;
    detailsPage(id);
}
});

export function homePage() {
    showView(section);
    displayMovies();
}

async function displayMovies() {
    catalog.replaceChildren(spinner());
    const movies = await getMovies();
    catalog.replaceChildren(...movies.map(createMoviePreview));
}

function createMoviePreview(movie) {
    const card = document.createElement('li');
    card.classList.add('card', 'mb-4');

    const imgElement = document.createElement('img');
    imgElement.classList.add('card-img-top');
    imgElement.setAttribute('src', `${movie.img}`);
    imgElement.setAttribute('alt', 'Card image cap');
    imgElement.setAttribute('width', '400');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const titleHeading = document.createElement('h4');
    titleHeading.classList.add('card-title');
    titleHeading.textContent = `${movie.title}`;

    cardBody.appendChild(titleHeading);

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');

    const detailsAnchor = document.createElement('a');
    detailsAnchor.setAttribute('href', `/details/${movie._id}`);

    const detailsButton = document.createElement('button');
    detailsButton.textContent = 'Details';
    detailsButton.classList.add('btn', 'btn-info');
    detailsButton.setAttribute('type', 'button');
    detailsButton.dataset.id = `${movie._id}`;
    
    detailsAnchor.appendChild(detailsButton);

    card.appendChild(imgElement);
    card.appendChild(cardBody);
    card.appendChild(detailsAnchor);

    return card;
}

async function getMovies() {
    try {
        const res = await fetch(url);
        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}