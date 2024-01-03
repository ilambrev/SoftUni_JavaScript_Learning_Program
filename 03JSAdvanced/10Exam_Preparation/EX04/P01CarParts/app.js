window.addEventListener('load', solve);

function solve() {

    let inputFormElement = document.querySelector('#append-part form');
    let carModelInput = document.querySelector('#car-model');
    let carYearInput = document.querySelector('#car-year');
    let partNameInput = document.querySelector('#part-name');
    let partNumberInput = document.querySelector('#part-number');
    let conditionInput = document.querySelector('#condition');

    let infoList = document.querySelector('#part-info .info-list');
    let confirmList = document.querySelector('#confirm-order .confirm-list');
    let completeImage = document.querySelector('#complete-img');
    let completeText = document.querySelector('#complete-text');

    let nextButton = document.querySelector('#next-btn');

    nextButton.addEventListener('click', addPartToPartInfo);

    function addPartToPartInfo(e) {
        e.preventDefault();

        let carModel = carModelInput.value;
        let carYear = Number(carYearInput.value);
        let partName = partNameInput.value;
        let partNumber = partNumberInput.value;
        let condition = conditionInput.value;

        if (carModel === '' || carYear === '' || partName === '' || partNumber === '' || condition === '') {
            return;
        }

        if (carYear < 1980 || carYear > 2023) {
            return;
        }

        let partListItemElement = document.createElement('li');
        partListItemElement.classList.add('part-content');

        let articleElement = document.createElement('article');

        let modelParagraphElement = document.createElement('p');
        modelParagraphElement.textContent = `Car Model: ${carModel}`;

        let yearParagraphElement = document.createElement('p');
        yearParagraphElement.textContent = `Car Year: ${carYear}`;

        let nameParagraphElement = document.createElement('p');
        nameParagraphElement.textContent = `Part Name: ${partName}`;

        let numberParagraphElement = document.createElement('p');
        numberParagraphElement.textContent = `Part Number: ${partNumber}`;

        let conditionParagraphElement = document.createElement('p');
        conditionParagraphElement.textContent = `Condition: ${condition}`;

        articleElement.appendChild(modelParagraphElement);
        articleElement.appendChild(yearParagraphElement);
        articleElement.appendChild(nameParagraphElement);
        articleElement.appendChild(numberParagraphElement);
        articleElement.appendChild(conditionParagraphElement);

        let editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', editPartInfo);

        let continueButton = document.createElement('button');
        continueButton.classList.add('continue-btn');
        continueButton.textContent = 'Continue';
        continueButton.addEventListener('click', moveToConfirmList);

        partListItemElement.appendChild(articleElement);
        partListItemElement.appendChild(editButton);
        partListItemElement.appendChild(continueButton);

        infoList.appendChild(partListItemElement);

        completeImage.style.visibility = 'hidden';
        completeText.textContent = '';
        inputFormElement.reset();
        nextButton.disabled = true;

    }

    function editPartInfo(e) {

        let partInfoListItem = e.currentTarget.parentElement;
        let editButton = partInfoListItem.querySelector('.edit-btn');
        let continueButton = partInfoListItem.querySelector('.continue-btn');

        carModelInput.value = partInfoListItem.querySelector('p:nth-of-type(1)').textContent.split(': ')[1];
        carYearInput.value = partInfoListItem.querySelector('p:nth-of-type(2)').textContent.split(': ')[1];
        partNameInput.value = partInfoListItem.querySelector('p:nth-of-type(3)').textContent.split(': ')[1];
        partNumberInput.value = partInfoListItem.querySelector('p:nth-of-type(4)').textContent.split(': ')[1];
        conditionInput.value = partInfoListItem.querySelector('p:nth-of-type(5)').textContent.split(': ')[1];

        editButton.remove();
        continueButton.remove();

        nextButton.disabled = false;

        infoList.remove();

    }

    function moveToConfirmList(e) {

        let partInfoListItem = e.currentTarget.parentElement;
        let editButton = partInfoListItem.querySelector('.edit-btn');
        let continueButton = partInfoListItem.querySelector('.continue-btn');

        editButton.remove();
        continueButton.remove();

        let confirmButton = document.createElement('button');
        confirmButton.classList.add('confirm-btn');
        confirmButton.textContent = 'Confirm';
        confirmButton.addEventListener('click', confirmOrder);

        let cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-btn');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', cancelOrder);

        partInfoListItem.appendChild(confirmButton);
        partInfoListItem.appendChild(cancelButton);

        confirmList.appendChild(partInfoListItem);

    }

    function confirmOrder(e) {

        let partInfoListItem = e.currentTarget.parentElement;

        partInfoListItem.remove();

        nextButton.disabled = false;

        completeImage.style.visibility = 'visible';
        completeText.textContent = 'Part is Ordered!';

    }

    function cancelOrder(e) {

        let partInfoListItem = e.currentTarget.parentElement;

        partInfoListItem.remove();

        nextButton.disabled = false;

    }

};