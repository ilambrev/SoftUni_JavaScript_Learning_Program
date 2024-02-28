window.addEventListener("load", solve);

function solve() {
    const offerForm = document.querySelector('.form-wrapper form');
    const makeInput = document.querySelector('#make');
    const modelInput = document.querySelector('#model');
    const yearInput = document.querySelector('#year');
    const fuelSelect = document.querySelector('#fuel');
    const originalCostInput = document.querySelector('#original-cost');
    const sellingPriceInput = document.querySelector('#selling-price');
    const publishButton = document.querySelector('#publish');
    const offersTableBody = document.querySelector('#table-body');
    const carsList = document.querySelector('#cars-list');
    const profitStrong = document.querySelector('#profit');

    publishButton.addEventListener('click', publish);

    function publish(e) {
        e.preventDefault();

        const make = makeInput.value;
        const model = modelInput.value;
        const year = yearInput.value;
        const fuel = fuelSelect.value;
        const originalCost = originalCostInput.value;
        const sellingPrice = sellingPriceInput.value;

        if (make === '' || model === '' || year === '' || fuel === '' || originalCost === '' || sellingPrice === '') {
            return;
        }

        if (Number(originalCost) > Number(sellingPrice)) {
            return;
        }

        const offerRow = document.createElement('tr');
        offerRow.classList.add('row');

        const makeCell = document.createElement('td');
        makeCell.textContent = `${make}`;

        const modelCell = document.createElement('td');
        modelCell.textContent = `${model}`;

        const yearCell = document.createElement('td');
        yearCell.textContent = `${year}`;

        const fuelCell = document.createElement('td');
        fuelCell.textContent = `${fuel}`;

        const originalCostCell = document.createElement('td');
        originalCostCell.textContent = `${originalCost}`;

        const sellingPriceCell = document.createElement('td');
        sellingPriceCell.textContent = `${sellingPrice}`;

        const buttonsCell = document.createElement('td');

        const editButton = document.createElement('button');
        editButton.classList.add('action-btn', 'edit');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', edit);

        const sellButton = document.createElement('button');
        sellButton.classList.add('action-btn', 'sell');
        sellButton.textContent = 'Sell';
        sellButton.addEventListener('click', sell);

        buttonsCell.appendChild(editButton);
        buttonsCell.appendChild(sellButton);

        offerRow.appendChild(makeCell);
        offerRow.appendChild(modelCell);
        offerRow.appendChild(yearCell);
        offerRow.appendChild(fuelCell);
        offerRow.appendChild(originalCostCell);
        offerRow.appendChild(sellingPriceCell);
        offerRow.appendChild(buttonsCell);

        offersTableBody.appendChild(offerRow);

        clearForm();
    }

    function edit(e) {
        const offerRow = e.currentTarget.parentElement.parentElement;

        const [make, model, year, fuel, originalCost, sellingPrice] = Array.from(offerRow.querySelectorAll('td')).map(c => c.textContent);

        makeInput.value = make;
        modelInput.value = model;
        yearInput.value = year;
        fuelSelect.value = fuel;
        originalCostInput.value = originalCost;
        sellingPriceInput.value = sellingPrice;

        offerRow.remove();
    }

    function sell(e) {
        const offerRow = e.currentTarget.parentElement.parentElement;

        const cellsData = Array.from(offerRow.querySelectorAll('td')).map(c => c.textContent);

        const carListItem = document.createElement('li');
        carListItem.classList.add('each-list');

        const makeAndModelSpan = document.createElement('span');
        makeAndModelSpan.textContent = `${cellsData[0]} ${cellsData[1]}`;

        const yearSpan = document.createElement('span');
        yearSpan.textContent = `${cellsData[2]}`;

        const profitSpan = document.createElement('span');
        profitSpan.textContent = `${Number(cellsData[5]) - Number(cellsData[4])}`;

        carListItem.appendChild(makeAndModelSpan);
        carListItem.appendChild(yearSpan);
        carListItem.appendChild(profitSpan);

        profitStrong.textContent = `${(Number(profitStrong.textContent) + Number(profitSpan.textContent)).toFixed(2)}`;

        carsList.appendChild(carListItem);

        offerRow.remove();
    }

    function clearForm() {
        makeInput.value = '';
        modelInput.value = '';
        yearInput.value = '';
        fuelSelect.value = '';
        originalCostInput.value = '';
        sellingPriceInput.value = '';
    }
}