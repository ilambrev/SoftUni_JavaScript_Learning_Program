import { homePage } from './home.js';
import { showView } from './util.js';

const url = 'http://localhost:3030/data/movies';
const section = document.querySelector('#add-movie');
const form = section.querySelector('#add-movie-form');

form.addEventListener('submit', onSubmit);

export function createPage() {
    showView(section);
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('img');

    await createMovie(title, description, img);

    form.reset();
    homePage();
}

async function createMovie(title, description, img) {
    const user = JSON.parse(localStorage.getItem('user'));

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': `${user.accessToken}`
            },
            body: JSON.stringify({ _ownerId: user._id, title, description, img })
        });

        if (!res.ok) {
            const error = await res.json();

            throw new Error(error.message);
        }
    } catch (error) {
        alert(error.message);
        throw error;
    }
}