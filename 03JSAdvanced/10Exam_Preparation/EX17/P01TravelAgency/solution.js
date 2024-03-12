window.addEventListener('load', solution);

function solution() {
    const fullNameInput = document.querySelector('#fname');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');
    const addressInput = document.querySelector('#address');
    const postalCodeInput = document.querySelector('#code');
    const submitButton = document.querySelector('#submitBTN');
    const editButton = document.querySelector('#editBTN');
    const continueButton = document.querySelector('#continueBTN');
    const infoPreviewList = document.querySelector('#infoPreview');
    const blockContainer = document.querySelector('#block');

    submitButton.addEventListener('click', addToPreview);
    editButton.addEventListener('click', editReservationData);
    continueButton.addEventListener('click', completeReservation);

    function addToPreview() {
        const fullName = fullNameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const address = addressInput.value;
        const postalCode = postalCodeInput.value;

        if (fullName === '' || email === '') {
            return;
        }

        const fullNameListItem = document.createElement('li');
        fullNameListItem.textContent = `Full Name: ${fullName}`;

        const emailListItem = document.createElement('li');
        emailListItem.textContent = `Email: ${email}`;

        const phoneListItem = document.createElement('li');
        phoneListItem.textContent = `Phone Number: ${phone}`;

        const addressListItem = document.createElement('li');
        addressListItem.textContent = `Address: ${address}`;

        const postalCodeListItem = document.createElement('li');
        postalCodeListItem.textContent = `Postal Code: ${postalCode}`;

        infoPreviewList.appendChild(fullNameListItem);
        infoPreviewList.appendChild(emailListItem);
        infoPreviewList.appendChild(phoneListItem);
        infoPreviewList.appendChild(addressListItem);
        infoPreviewList.appendChild(postalCodeListItem);

        submitButton.disabled = true;
        editButton.disabled = false;
        continueButton.disabled = false;

        clearFormFields();
    }

    function editReservationData() {
        const listItems = Array.from(infoPreviewList.querySelectorAll('li')).map(i => i.textContent.split(': ')[1]);

        fullNameInput.value = listItems[0];
        emailInput.value = listItems[1];
        phoneInput.value = listItems[2];
        addressInput.value = listItems[3];
        postalCodeInput.value = listItems[4];

        infoPreviewList.textContent = '';

        submitButton.disabled = false;
        editButton.disabled = true;
        continueButton.disabled = true;
    }

    function completeReservation() {
        blockContainer.textContent = '';

        const messageHeading = document.createElement('h3')
        messageHeading.textContent = 'Thank you for your reservation!';

        blockContainer.appendChild(messageHeading);
    }

    function clearFormFields() {
        fullNameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        addressInput.value = '';
        postalCodeInput.value = '';
    }
}