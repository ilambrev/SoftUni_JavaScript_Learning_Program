function solve() {
    const textAreas = Array.from(document.querySelectorAll('#exercise textarea'));
    const inputTextArea = textAreas[0];
    const outputTextArea = textAreas[1];

    const buttons = Array.from(document.querySelectorAll('#exercise button'));
    const generateButton = buttons[0];
    const buyButton = buttons[1];

    const tableBody = document.querySelector('.table tbody');

    generateButton.addEventListener('click', generate);
    buyButton.addEventListener('click', buy);

    function generate() {
        Array.from(document.querySelectorAll('input[type="checkbox"]')).map(el => el.disabled = false);

        const newPiecesOfFurniture = JSON.parse(inputTextArea.value);


        newPiecesOfFurniture.forEach(piece => {
            const furniturePieceRow = document.createElement('tr');

            const imgCell = document.createElement('td');
            const imgElement = document.createElement('img');
            imgElement.src = piece.img;
            imgCell.appendChild(imgElement);

            const nameCell = document.createElement('td');
            const nameParagraph = document.createElement('p');
            nameParagraph.textContent = piece.name;
            nameCell.appendChild(nameParagraph);

            const priceCell = document.createElement('td');
            const priceParagraph = document.createElement('p');
            priceParagraph.textContent = piece.price;
            priceCell.appendChild(priceParagraph);

            const decFactorCell = document.createElement('td');
            const decFactorParagraph = document.createElement('p');
            decFactorParagraph.textContent = piece.decFactor;
            decFactorCell.appendChild(decFactorParagraph);

            const inputCheckboxCell = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'checkbox';
            inputCheckboxCell.appendChild(input);

            furniturePieceRow.appendChild(imgCell);
            furniturePieceRow.appendChild(nameCell);
            furniturePieceRow.appendChild(priceCell);
            furniturePieceRow.appendChild(decFactorCell);
            furniturePieceRow.appendChild(inputCheckboxCell);

            tableBody.appendChild(furniturePieceRow);

        });
    }

    function buy() {
        const boughtItems = Array.from(document.querySelectorAll('input[type="checkbox"]'))
            .filter(cb => cb.checked == true)
            .map(cb => {
                const itemProperties = Array.from(cb.parentElement.parentElement.querySelectorAll('p')).map(p => p.textContent);

                const [name, price, decFactor] = itemProperties;

                return { name: name, price: Number(price), decFactor: Number(decFactor) };
            });

        let resultContent = `Bought furniture: ${boughtItems.map(item => item.name).join(', ')}`;
        resultContent = `${resultContent}\nTotal price: ${boughtItems.reduce((acc, curr) => acc += curr.price, 0).toFixed(2)}`;
        resultContent = `${resultContent}\nAverage decoration factor: ${boughtItems.reduce((acc, curr) => acc += curr.decFactor, 0) / boughtItems.length}`;

        outputTextArea.value = resultContent;
    }
}