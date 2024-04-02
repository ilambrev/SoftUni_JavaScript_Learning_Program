import { deleteMovie } from './delete.js';
import { editPage } from './edit.js';
import { showView, spinner } from './util.js';

const url = 'http://localhost:3030/data';

const section = document.querySelector('#movie-example');

export function detailsPage(id) {
    showView(section);
    displayMovie(id);
}

async function displayMovie(id) {
    section.replaceChildren(spinner());

    const user = JSON.parse(localStorage.getItem('user'));

    const [movie, likes, ownLike] = await Promise.all([
        getMovie(id),
        getLikes(id),
        getOwnLike(id, user)
    ]);

    section.replaceChildren(createMovieCard(movie, user, likes, ownLike));
}

function createMovieCard(movie, user, likes, ownLike) {
    const containerElement = document.createElement('div');
    containerElement.classList.add('container');

    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row', 'bg-light', 'text-dark');

    const titleHeading = document.createElement('h1');
    titleHeading.textContent = `Movie title: ${movie.title}`;

    const firstColContainer = document.createElement('div');
    firstColContainer.classList.add('col-md-8');

    const imgElement = document.createElement('img');
    imgElement.classList.add('img-thumbnail');
    imgElement.setAttribute('src', `${movie.img}`);
    imgElement.setAttribute('alt', 'Movie');

    firstColContainer.appendChild(imgElement);

    const secondColContainer = document.createElement('div');
    secondColContainer.classList.add('col-md-4', 'text-center');

    const descriptionHeading = document.createElement('h3');
    descriptionHeading.classList.add('my-3');
    descriptionHeading.textContent = 'Movie Description';

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = `${movie.description}`;

    const constrols = createControls(movie, user, ownLike);

    const likesSpan = document.createElement('span');
    likesSpan.textContent = `Liked ${likes}`;
    likesSpan.classList.add('enrolled-span');

    secondColContainer.appendChild(descriptionHeading);
    secondColContainer.appendChild(descriptionParagraph);
    constrols.forEach(c => secondColContainer.appendChild(c));
    secondColContainer.appendChild(likesSpan);

    rowContainer.appendChild(titleHeading);
    rowContainer.appendChild(firstColContainer);
    rowContainer.appendChild(secondColContainer);

    containerElement.appendChild(rowContainer);

    return containerElement;
}

function createControls(movie, user, ownLike) {
    const isOwner = user && user._id === movie._ownerId;
    const constrols = [];

    if (isOwner) {
        const deleteAnchor = document.createElement('a');
        deleteAnchor.textContent = 'Delete';
        deleteAnchor.classList.add('btn', 'btn-danger');
        deleteAnchor.setAttribute('href', '#');
        deleteAnchor.addEventListener('click', () => deleteMovie(movie._id));

        const editAnchor = document.createElement('a');
        editAnchor.textContent = 'Edit';
        editAnchor.classList.add('btn', 'btn-warning');
        editAnchor.setAttribute('href', '');
        editAnchor.addEventListener('click', (e) => editPage(e, movie));

        constrols.push(deleteAnchor);
        constrols.push(editAnchor);
    } else if (user && !ownLike) {
        const likeAnchor = document.createElement('a');
        likeAnchor.textContent = 'Like';
        likeAnchor.classList.add('btn', 'btn-primary');
        likeAnchor.setAttribute('href', '');
        likeAnchor.addEventListener('click', (e) => likeMovie(e, movie._id));

        constrols.push(likeAnchor);
    }

    return constrols;
}

async function getMovie(id) {
    try {
        const res = await fetch(`${url}/movies/${id}`);

        if (!res.ok) {
            const error = await res.json();

            throw new Error(error.message);
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error.message);
    }
}

async function getLikes(id) {
    try {
        const res = await fetch(`${url}/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);

        if (!res.ok) {
            const error = await res.json();

            throw new Error(error.message);
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error.message);
    }
}

async function getOwnLike(movieId, user) {
    if (!user) {
        return false;
    } else {
        const userId = user._id;

        try {
            const res = await fetch(`${url}/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);

            if (!res.ok) {
                const error = await res.json();

                throw new Error(error.message);
            }

            const data = await res.json();

            return data.length > 0;
        } catch (error) {
            console.log(error.message);
        }
    }

}

async function likeMovie(e, movieId) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));

    try {
        const res = await fetch(`${url}/likes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': user.accessToken
            },
            body: JSON.stringify({ movieId })
        });

        if (!res.ok) {
            const error = await res.json();

            throw new Error(error.message);
        }

        const data = await res.json();

        const likedSpan = section.querySelector('.enrolled-span');
        const likes = Number(likedSpan.textContent.replace('Liked ', '')) + 1;

        likedSpan.textContent = `Liked ${likes}`;

        section.querySelector('.btn-primary').remove();
    } catch (error) {
        console.log(error.message);
    }

}