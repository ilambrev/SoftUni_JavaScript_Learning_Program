window.addEventListener("load", solve);

function solve() {

    let inputForm = document.querySelector('#main form');
    let gemNameInput = document.querySelector('#gem-name');
    let colorInput = document.querySelector('#color');
    let caratsInput = document.querySelector('#carats');
    let priceInput = document.querySelector('#price');
    let typeInput = document.querySelector('#type');

    let previewList = document.querySelector('#preview-list');
    let collection = document.querySelector('#collection');
    let addGemButton = document.querySelector('#add-btn');

    addGemButton.addEventListener('click', addGemToPreview);

    function addGemToPreview(e) {
        e.preventDefault();

        let gemstoneName = gemNameInput.value;
        let color = colorInput.value;
        let carats = caratsInput.value;
        let price = priceInput.value;
        let type = typeInput.value;

        if (gemstoneName === '' || color === '' || carats === '' || price === '' || type === '') {
            return;
        }

        let gemListItemElement = document.createElement('li');
        gemListItemElement.classList.add('gem-info');

        let gemArticleElement = document.createElement('article');

        let nameHeadingElement = document.createElement('h4');
        nameHeadingElement.textContent = gemstoneName;

        let colorParahraphElement = document.createElement('p');
        colorParahraphElement.textContent = `Color: ${color}`;

        let caratsParagraphElement = document.createElement('p');
        caratsParagraphElement.textContent = `Carats: ${carats}`;

        let priceParagraphElement = document.createElement('p');
        priceParagraphElement.textContent = `Price: ${price}$`;

        let typeParagraphElement = document.createElement('p');
        typeParagraphElement.textContent = `Type: ${type}`;

        gemArticleElement.appendChild(nameHeadingElement);
        gemArticleElement.appendChild(colorParahraphElement);
        gemArticleElement.appendChild(caratsParagraphElement);
        gemArticleElement.appendChild(priceParagraphElement);
        gemArticleElement.appendChild(typeParagraphElement);

        let saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.textContent = 'Save to Collection';
        saveButton.addEventListener('click', saveGemInfo);

        let editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit Information';
        editButton.addEventListener('click', editGemInfo);

        let cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-btn');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', removeGemFromPreview);

        gemListItemElement.appendChild(gemArticleElement);
        gemListItemElement.appendChild(saveButton);
        gemListItemElement.appendChild(editButton);
        gemListItemElement.appendChild(cancelButton);

        previewList.appendChild(gemListItemElement);

        inputForm.reset();

        addGemButton.disabled = true;

    }

    function editGemInfo(e) {

        let gemListItem = e.currentTarget.parentElement;

        gemNameInput.value = gemListItem.querySelector('h4').textContent;
        colorInput.value = gemListItem.querySelector('p:nth-of-type(1)').textContent.split(': ')[1];
        caratsInput.value = gemListItem.querySelector('p:nth-of-type(2)').textContent.split(': ')[1];
        priceInput.value = gemListItem.querySelector('p:nth-of-type(3)').textContent.split(': ')[1].replace('$', '');
        typeInput.value = gemListItem.querySelector('p:nth-of-type(4)').textContent.split(': ')[1];

        let saveButton = gemListItem.querySelector('.save-btn');
        let editButton = gemListItem.querySelector('.edit-btn');
        let cancelButton = gemListItem.querySelector('.cancel-btn');

        saveButton.remove();
        editButton.remove();
        cancelButton.remove();

        gemListItem.remove();

        addGemButton.disabled = false;

    }

    function saveGemInfo(e) {

        let gemListItem = e.currentTarget.parentElement;

        let gemstoneName = gemListItem.querySelector('h4').textContent;
        let color = gemListItem.querySelector('p:nth-of-type(1)').textContent;
        let carats = gemListItem.querySelector('p:nth-of-type(2)').textContent;
        let price = gemListItem.querySelector('p:nth-of-type(3)').textContent;
        let type = gemListItem.querySelector('p:nth-of-type(4)').textContent;

        gemListItem.innerHTML = '';
        gemListItem.classList.remove('gem-info');

        let infoParagraphElement = document.createElement('p');
        infoParagraphElement.classList.add('collection-item');
        infoParagraphElement.textContent = `${gemstoneName} - ${color}/ ${carats}/ ${price}/ ${type}`;

        gemListItem.appendChild(infoParagraphElement);

        collection.appendChild(gemListItem);

        addGemButton.disabled = false;

    }

    function removeGemFromPreview(e) {

        let gemListItem = e.currentTarget.parentElement;

        gemListItem.remove();

        addGemButton.disabled = false;

    }

}