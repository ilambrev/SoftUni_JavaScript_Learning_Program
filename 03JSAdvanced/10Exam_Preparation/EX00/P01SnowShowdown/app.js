window.addEventListener("load", solve);

function solve() {
    const inputForm = document.querySelector('.snowman');
    const nameInput = document.querySelector('#snowman-name');
    const heightInput = document.querySelector('#snowman-height');
    const locationInput = document.querySelector('#location');
    const creatorInput = document.querySelector('#creator-name');
    const attributeSelect = document.querySelector('#special-attribute');
    const addButton = document.querySelector('.snowman button.add-btn');
    const snowmanPreviewList = document.querySelector('.snowman-preview');
    const snowList = document.querySelector('.snow-list');
    const mainContainer = document.querySelector('#hero');
    const bodyContainer = document.querySelector('body');
    const backImg = document.querySelector('#back-img');

    inputForm.reset();

    addButton.addEventListener('click', addSnowman);

    function addSnowman(e) {
        e.preventDefault();

        const name = nameInput.value;
        const height = heightInput.value;
        const location = locationInput.value;
        const creator = creatorInput.value;
        const attribute = attributeSelect.value;

        if (name === '' || height === '' || location === '' || creator === '' || attribute === '') {
            return;
        }

        const infoListItem = document.createElement('li');
        infoListItem.classList.add('snowman-info');

        const snowmanArticle = document.createElement('article');

        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = `Name: ${name}`;

        const heightParagraph = document.createElement('p');
        heightParagraph.textContent = `Height: ${height}`;

        const locationParagraph = document.createElement('p');
        locationParagraph.textContent = `Location: ${location}`;

        const creatorParagraph = document.createElement('p');
        creatorParagraph.textContent = `Creator: ${creator}`;

        const attributeParagraph = document.createElement('p');
        attributeParagraph.textContent = `Attribute: ${attribute}`;

        snowmanArticle.appendChild(nameParagraph);
        snowmanArticle.appendChild(heightParagraph);
        snowmanArticle.appendChild(locationParagraph);
        snowmanArticle.appendChild(creatorParagraph);
        snowmanArticle.appendChild(attributeParagraph);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('btn-container');

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', editInfo);

        const nextButton = document.createElement('button');
        nextButton.classList.add('next-btn');
        nextButton.textContent = 'Next';
        nextButton.addEventListener('click', moveToSnowList);

        buttonsContainer.appendChild(editButton);
        buttonsContainer.appendChild(nextButton);

        infoListItem.appendChild(snowmanArticle);
        infoListItem.appendChild(buttonsContainer);

        snowmanPreviewList.appendChild(infoListItem);

        inputForm.reset();

        addButton.disabled = true;
    }

    function editInfo(e) {
        const infoListItem = e.currentTarget.parentElement.parentElement;

        const infoParagraphs = Array.from(infoListItem.querySelectorAll('article p')).map(p => p.textContent);

        nameInput.value = infoParagraphs[0].replace('Name: ', '');
        heightInput.value = infoParagraphs[1].replace('Height: ', '');
        locationInput.value = infoParagraphs[2].replace('Location: ', '');
        creatorInput.value = infoParagraphs[3].replace('Creator: ', '');
        attributeSelect.value = infoParagraphs[4].replace('Attribute: ', '');

        infoListItem.remove();

        addButton.disabled = false;
    }

    function moveToSnowList(e) {
        const infoListItem = e.currentTarget.parentElement.parentElement;
        const snowListItem = infoListItem.cloneNode(true);

        snowListItem.querySelector('.btn-container').remove();

        const sendButton = document.createElement('button');
        sendButton.classList.add('send-btn');
        sendButton.textContent = 'Send';
        sendButton.addEventListener('click', send);

        snowListItem.querySelector('article').appendChild(sendButton);

        infoListItem.remove();

        snowList.appendChild(snowListItem);
    }

    function send() {
        mainContainer.remove();

        const backButton = document.createElement('button');
        backButton.classList.add('back-btn');
        backButton.textContent = 'Back';
        backButton.addEventListener('click', () => location.reload());

        bodyContainer.appendChild(backButton);

        backImg.hidden = false;

    }
}