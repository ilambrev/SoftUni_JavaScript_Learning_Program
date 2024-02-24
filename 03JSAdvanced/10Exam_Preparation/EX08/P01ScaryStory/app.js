window.addEventListener("load", solve);

function solve() {
    const storyForm = document.querySelector('#main form');
    const firstNameInput = document.querySelector('#first-name');
    const lastNameInput = document.querySelector('#last-name');
    const ageInput = document.querySelector('#age');
    const titleInput = document.querySelector('#story-title');
    const genreInput = document.querySelector('#genre');
    const storyTextArea = document.querySelector('#story');
    const publishButton = document.querySelector('#form-btn');
    const previewList = document.querySelector('#preview-list');
    const mainContainer = document.querySelector('#main');

    publishButton.addEventListener('click', previewStory);

    storyForm.reset();

    function previewStory(e) {
        e.preventDefault();

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const age = ageInput.value;
        const title = titleInput.value;
        const genre = genreInput.value;
        const story = storyTextArea.value;

        if (firstName === '' || lastName === '' || age === '' || title === '' || story === '') {
            return;
        }

        const infoListItem = document.createElement('li');
        infoListItem.classList.add('story-info');

        const storyArticle = document.createElement('article');

        const authorNameHeading = document.createElement('h4');
        authorNameHeading.textContent = `Name: ${firstName} ${lastName}`;

        const ageParagraph = document.createElement('p');
        ageParagraph.textContent = `Age: ${age}`;

        const titleParagraph = document.createElement('p');
        titleParagraph.textContent = `Title: ${title}`;

        const genreParagraph = document.createElement('p');
        genreParagraph.textContent = `Genre: ${genre}`;

        const storyParagraph = document.createElement('p');
        storyParagraph.textContent = `${story}`;

        storyArticle.appendChild(authorNameHeading);
        storyArticle.appendChild(ageParagraph);
        storyArticle.appendChild(titleParagraph);
        storyArticle.appendChild(genreParagraph);
        storyArticle.appendChild(storyParagraph);

        const saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.textContent = 'Save Story';
        saveButton.addEventListener('click', save);

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit Story';
        editButton.addEventListener('click', edit);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete Story';
        deleteButton.addEventListener('click', deleteStory);

        infoListItem.appendChild(storyArticle);
        infoListItem.appendChild(saveButton);
        infoListItem.appendChild(editButton);
        infoListItem.appendChild(deleteButton);

        previewList.appendChild(infoListItem);

        storyForm.reset();

        publishButton.disabled = true;
    }

    function save() {
        mainContainer.textContent = '';

        const messageHeading = document.createElement('h1');
        messageHeading.textContent = 'Your scary story is saved!';

        mainContainer.appendChild(messageHeading);
    }

    function edit(e) {
        const infoListItem = e.currentTarget.parentElement;

        const [firstName, lastName] = infoListItem.querySelector('h4').textContent.replace('Name: ', '').split(' ');
        const paragraphs = Array.from(infoListItem.querySelectorAll('p')).map(p => p.textContent);

        firstNameInput.value = firstName;
        lastNameInput.value = lastName;
        ageInput.value = paragraphs[0].replace('Age: ', '');
        titleInput.value = paragraphs[1].replace('Title: ', '');
        genreInput.value = paragraphs[2].replace('Genre: ', '');
        storyTextArea.value = paragraphs[3];

        infoListItem.remove();

        publishButton.disabled = false;
    }

    function deleteStory(e) {
        const infoListItem = e.currentTarget.parentElement;

        infoListItem.remove();

        publishButton.disabled = false;
    }
}