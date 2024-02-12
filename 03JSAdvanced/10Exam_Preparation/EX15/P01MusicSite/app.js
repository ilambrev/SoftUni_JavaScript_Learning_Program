window.addEventListener('load', solve);

function solve() {
    const genreInput = document.querySelector('#genre');
    const nameInput = document.querySelector('#name');
    const authorInput = document.querySelector('#author');
    const dateInput = document.querySelector('#date');
    const addButton = document.querySelector('#add-btn');
    const allHitsContainer = document.querySelector('#all-hits .all-hits-container');
    const savedContainer = document.querySelector('#saved-hits .saved-container');
    const likesElement = document.querySelector('#total-likes .likes p');

    addButton.addEventListener('click', addSong);

    clearForm();

    function addSong(e) {
        e.preventDefault();

        const genre = genreInput.value;
        const name = nameInput.value;
        const author = authorInput.value;
        const date = dateInput.value;

        if (genre === '' || name === '' || author === '' || date === '') {
            return;
        }

        const hitInfoElement = document.createElement('div');
        hitInfoElement.classList.add('hits-info');

        const imgElement = document.createElement('img');
        imgElement.src = './static/img/img.png';

        const genreHeading = document.createElement('h2');
        genreHeading.textContent = `Genre: ${genre}`;

        const nameHeading = document.createElement('h2');
        nameHeading.textContent = `Name: ${name}`;

        const authorHeading = document.createElement('h2');
        authorHeading.textContent = `Author: ${author}`;

        const dateHeading = document.createElement('h3');
        dateHeading.textContent = `Date: ${date}`;

        const buttonSave = document.createElement('button');
        buttonSave.classList.add('save-btn');
        buttonSave.textContent = 'Save song';
        buttonSave.addEventListener('click', saveSong);

        const buttonLike = document.createElement('button');
        buttonLike.classList.add('like-btn');
        buttonLike.textContent = 'Like song';
        buttonLike.addEventListener('click', likeSong);

        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add('delete-btn');
        buttonDelete.textContent = 'Delete';
        buttonDelete.addEventListener('click', deleteSong);

        hitInfoElement.appendChild(imgElement);
        hitInfoElement.appendChild(genreHeading);
        hitInfoElement.appendChild(nameHeading);
        hitInfoElement.appendChild(authorHeading);
        hitInfoElement.appendChild(dateHeading);
        hitInfoElement.appendChild(buttonSave);
        hitInfoElement.appendChild(buttonLike);
        hitInfoElement.appendChild(buttonDelete);

        allHitsContainer.appendChild(hitInfoElement);

        clearForm();
    }

    function saveSong(e) {
        const songInfo = e.currentTarget.parentElement;
        const newSongInfo = songInfo.cloneNode(true);

        songInfo.remove();

        newSongInfo.querySelector('.save-btn').remove();
        newSongInfo.querySelector('.like-btn').remove();
        newSongInfo.querySelector('.delete-btn').addEventListener('click', deleteSong);

        savedContainer.appendChild(newSongInfo);
    }

    function likeSong(e) {
        let currentTotalLikes = Number(likesElement.textContent.replace('Total Likes: ', ''));
        currentTotalLikes++;

        likesElement.textContent = `Total Likes: ${currentTotalLikes}`;

        e.currentTarget.disabled = true;
    }

    function deleteSong(e) {
        const songInfo = e.currentTarget.parentElement;

        songInfo.remove();
    }

    function clearForm() {
        genreInput.value = '';
        nameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';
    }
}