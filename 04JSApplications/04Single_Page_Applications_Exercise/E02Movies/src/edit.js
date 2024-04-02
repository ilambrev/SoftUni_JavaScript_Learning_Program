import { detailsPage } from './details.js';
import { showView } from './util.js';

const url = 'http://localhost:3030/data/movies';
const section = document.querySelector('#edit-movie');
const form = section.querySelector('form');
const titleInput = form.querySelector('#title');
const descriptionTextarea = form.querySelector('textarea');
const imageUrlInput = form.querySelector('#imageUrl');

let movieId = '';

form.addEventListener('submit', onSubmit);

export function editPage(e, movie) {
    e.preventDefault();

    movieId = movie._id;

    showView(section);
    loadMovieDataInForm(movie);
}

function loadMovieDataInForm(movie) {
    titleInput.value = movie.title;
    descriptionTextarea.value = movie.description;
    imageUrlInput.value = movie.img;
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('img');

    form.reset();

    const editedMovie = await editMovie(title, description, img);

    detailsPage(editedMovie._id);
}

async function editMovie(title, description, img) {
    const user = JSON.parse(localStorage.getItem('user'));

    try {
        const res = await fetch(`${url}/${movieId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': `${user.accessToken}`
            },
            body: JSON.stringify({ title, description, img })
        });

        if (!res.ok) {
            const error = await res.json();

            throw new Error(error.message);
        }

        const data = await res.json();

        return data;
    } catch (error) {
        alert(error.message);
        throw error;
    }
}