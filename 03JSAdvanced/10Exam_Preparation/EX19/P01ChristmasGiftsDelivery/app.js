function solution() {
    const giftInput = document.querySelector('.card div input');
    const addButton = document.querySelector('.card div button');
    const [giftsUnorderedList, sentGiftsUnorderedList, discardedGiftsUnorderedList] =
        Array.from(document.querySelectorAll('ul'));

    addButton.addEventListener('click', onClickAdd);

    function onClickAdd() {
        const giftName = giftInput.value;

        const giftListTtem = document.createElement('li');
        giftListTtem.textContent = `${giftName}`;
        giftListTtem.classList.add('gift');

        const sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.setAttribute('id', 'sendButton');
        sendButton.addEventListener('click', onClickMove);

        const discardButton = document.createElement('button');
        discardButton.textContent = 'Discard';
        discardButton.setAttribute('id', 'discardButton');
        discardButton.addEventListener('click', onClickMove);

        giftListTtem.appendChild(sendButton);
        giftListTtem.appendChild(discardButton);

        giftsUnorderedList.appendChild(giftListTtem);

        sortGiftsByName();
        giftInput.value = '';
    }

    function sortGiftsByName() {
        const liElements = Array.from(giftsUnorderedList.querySelectorAll('li'));

        giftsUnorderedList.innerHTML = '';

        liElements.sort((li1, li2) => li1.textContent.localeCompare(li2.textContent))
            .forEach(li => giftsUnorderedList.appendChild(li));
    }

    function onClickMove(e) {
        const buttonType = e.currentTarget.textContent;
        const giftListTtem = e.currentTarget.parentElement;

        giftListTtem.querySelector('#sendButton').remove();
        giftListTtem.querySelector('#discardButton').remove();

        if (buttonType === 'Send') {
            sentGiftsUnorderedList.appendChild(giftListTtem);
        } else if (buttonType === 'Discard') {
            discardedGiftsUnorderedList.appendChild(giftListTtem);
        }
    }
}