window.addEventListener('load', solve);

function solve() {
    const inputModel = document.querySelector('#model');
    const inputYear = document.querySelector('#year');
    const inputDescription = document.querySelector('#description');
    const inputPrice = document.querySelector('#price');
    const addButton = document.querySelector('#add');
    const tbodyElement = document.querySelector('#furniture-list');
    const tdTotalPrice = document.querySelector('.total-price');

    formReset();

    addButton.addEventListener('click', add);

    function add(e) {
        e.preventDefault();

        const regExpYear = /^\d{4}$/gm;
        const regExpPrice = /^\d+.{0,1}\d*$/gm;

        const model = inputModel.value;
        const year = inputYear.value;
        const description = inputDescription.value;
        const price = inputPrice.value;

        if (model === '' || description === '') {
            return;
        }

        if (!regExpYear.test(year)) {
            return;
        }

        if (!regExpPrice.test(price)) {
            return
        }

        const trMainInfo = document.createElement('tr');
        trMainInfo.classList.add('info');

        const tdModel = document.createElement('td');
        tdModel.textContent = model;

        const tdPrice = document.createElement('td');
        tdPrice.textContent = `${Number(price).toFixed(2)}`;

        const tdButtons = document.createElement('td');

        const infoButton = document.createElement('button');
        infoButton.classList.add('moreBtn');
        infoButton.textContent = 'More Info';
        infoButton.addEventListener('click', info);

        const buyButton = document.createElement('button');
        buyButton.classList.add('buyBtn');
        buyButton.textContent = 'Buy it';
        buyButton.addEventListener('click', buy);

        tdButtons.appendChild(infoButton);
        tdButtons.appendChild(buyButton);

        trMainInfo.appendChild(tdModel);
        trMainInfo.appendChild(tdPrice);
        trMainInfo.appendChild(tdButtons);

        const trAdditionalInfo = document.createElement('tr');
        trAdditionalInfo.classList.add('hide');

        const tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${year}`;

        const tdDescription = document.createElement('td');
        tdDescription.colSpan = '3';
        tdDescription.textContent = `Description: ${description}`;

        trAdditionalInfo.appendChild(tdYear);
        trAdditionalInfo.appendChild(tdDescription);

        tbodyElement.appendChild(trMainInfo);
        tbodyElement.appendChild(trAdditionalInfo);

        formReset();
    }

    function info(e) {
        const infoButton = e.currentTarget;
        const additionalInfo = infoButton.parentElement.parentElement.nextSibling;

        if (infoButton.textContent === 'More Info') {
            infoButton.textContent = 'Less Info';
            additionalInfo.style.display = 'contents';
        } else if (infoButton.textContent === 'Less Info') {
            infoButton.textContent = 'More Info';
            additionalInfo.style.display = 'none';
        }
    }

    function buy(e) {
        const buyButton = e.currentTarget;
        const mainInfo = buyButton.parentElement.parentElement;
        const additionalInfo = mainInfo.nextSibling;

        const price = Number(mainInfo.querySelector('td:nth-of-type(2)').textContent);

        tdTotalPrice.textContent = `${(Number(tdTotalPrice.textContent) + price).toFixed(2)}`;

        mainInfo.remove();
        additionalInfo.remove();
    }

    function formReset() {
        inputModel.value = '';
        inputYear.value = '';
        inputDescription.value = '';
        inputPrice.value = '';
    }
}