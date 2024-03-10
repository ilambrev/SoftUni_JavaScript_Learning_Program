window.addEventListener('load', solve);

function solve() {
    const repairForm = document.querySelector('#right form');
    const productTypeInput = document.querySelector('#type-product');
    const problemDescriptionTextarea = document.querySelector('#description');
    const clientNameInput = document.querySelector('#client-name');
    const clientPhoneInput = document.querySelector('#client-phone');
    const sendFormButton = repairForm.querySelector('button');
    const receivedOrdersSection = document.querySelector('#received-orders');
    const completedOrdersSection = document.querySelector('#completed-orders');
    const clearButton = document.querySelector('.clear-btn');

    repairForm.reset();

    sendFormButton.addEventListener('click', sendForm);
    clearButton.addEventListener('click', clearOrders);

    function sendForm(e) {
        e.preventDefault();

        const productType = productTypeInput.value;
        const problemDescription = problemDescriptionTextarea.value;
        const clientName = clientNameInput.value;
        const clientPhone = clientPhoneInput.value;

        if (problemDescription === '' || clientName === '' || clientPhone === '') {
            return;
        }

        const orderContainer = document.createElement('div');
        orderContainer.classList.add('container');

        const productTypeHeading = document.createElement('h2');
        productTypeHeading.textContent = `Product type for repair: ${productType}`;

        const clientInformationHeading = document.createElement('h3');
        clientInformationHeading.textContent = `Client information: ${clientName}, ${clientPhone}`;

        const descriptionHeading = document.createElement('h4');
        descriptionHeading.textContent = `Description of the problem: ${problemDescription}`;

        const startRepairButton = document.createElement('button');
        startRepairButton.textContent = 'Start repair';
        startRepairButton.classList.add('start-btn');
        startRepairButton.addEventListener('click', repairDevice);

        const finishRepairButton = document.createElement('button');
        finishRepairButton.textContent = 'Finish repair';
        finishRepairButton.classList.add('finish-btn');
        finishRepairButton.addEventListener('click', finishRepairDevice);
        finishRepairButton.disabled = true;

        orderContainer.appendChild(productTypeHeading);
        orderContainer.appendChild(clientInformationHeading);
        orderContainer.appendChild(descriptionHeading);
        orderContainer.appendChild(startRepairButton);
        orderContainer.appendChild(finishRepairButton);

        receivedOrdersSection.appendChild(orderContainer);

        repairForm.reset();
    }

    function repairDevice(e) {
        const startRepairButton = e.currentTarget;
        const finishRepairButton = e.currentTarget.parentElement.querySelector('.finish-btn');

        startRepairButton.disabled = true;
        finishRepairButton.disabled = false;
    }

    function finishRepairDevice(e) {
        const orderContainer = e.currentTarget.parentElement;
        const finishedOrderContainer = orderContainer.cloneNode(true);

        finishedOrderContainer.querySelector('.start-btn').remove();
        finishedOrderContainer.querySelector('.finish-btn').remove();

        orderContainer.remove();

        completedOrdersSection.appendChild(finishedOrderContainer);
    }

    function clearOrders(e) {
        const ordersContainers = Array.from(e.currentTarget.parentElement.querySelectorAll('.container'));

        ordersContainers.map(container => container.remove());
    }
}