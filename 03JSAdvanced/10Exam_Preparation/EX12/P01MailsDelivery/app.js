function solve() {
    const mailForm = document.querySelector('.addMails form');
    const recipientNameInput = document.querySelector('#recipientName');
    const titleInput = document.querySelector('#title');
    const messageTextarea = document.querySelector('#message');
    const addToListButton = document.querySelector('#add');
    const resetButton = document.querySelector('#reset');
    const mailsList = document.querySelector('#list');
    const sentMailsList = document.querySelector('.sent-list');
    const deleteMailslist = document.querySelector('.delete-list');

    addToListButton.addEventListener('click', addToList);
    resetButton.addEventListener('click', (e) => {
        e.preventDefault();

        resetForm();
    });

    function addToList(e) {
        e.preventDefault();

        const recipientName = recipientNameInput.value;
        const title = titleInput.value;
        const message = messageTextarea.value;

        if (recipientName === '' || title === '' || message === '') {
            return;
        }

        const mailListItem = document.createElement('li');

        const titleHeading = document.createElement('h4');
        titleHeading.textContent = `Title: ${title}`;

        const recipientNameHeading = document.createElement('h4');
        recipientNameHeading.textContent = `Recipient Name: ${recipientName}`;

        const messageSpan = document.createElement('span');
        messageSpan.textContent = `${message}`;

        const buttonsContainer = document.createElement('div');
        buttonsContainer.id = 'list-action';

        const sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.type = 'submit';
        sendButton.id = 'send';
        sendButton.addEventListener('click', sendMail);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.type = 'submit';
        deleteButton.id = 'delete';
        deleteButton.addEventListener('click', deleteMail);

        buttonsContainer.appendChild(sendButton);
        buttonsContainer.appendChild(deleteButton);

        mailListItem.appendChild(titleHeading);
        mailListItem.appendChild(recipientNameHeading);
        mailListItem.appendChild(messageSpan);
        mailListItem.appendChild(buttonsContainer);

        mailsList.appendChild(mailListItem);

        resetForm();
    }

    function sendMail(e) {
        const mailListItem = e.currentTarget.parentElement.parentElement;

        const recipientName = mailListItem.querySelector('h4:nth-of-type(2)').textContent.replace('Recipient Name: ', '');
        const title = mailListItem.querySelector('h4:nth-of-type(1)').textContent;

        console.log(recipientName, title);

        const sentMailListItem = document.createElement('li');

        const recipientNameSpan = document.createElement('span');
        recipientNameSpan.textContent = `To: ${recipientName}`;

        const titleSpan = document.createElement('span');
        titleSpan.textContent = title;

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('btn');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.type = 'submit';
        deleteButton.addEventListener('click', deleteMail);

        buttonContainer.appendChild(deleteButton);

        sentMailListItem.appendChild(recipientNameSpan);
        sentMailListItem.appendChild(titleSpan);
        sentMailListItem.appendChild(buttonContainer);

        sentMailsList.appendChild(sentMailListItem);

        mailListItem.remove();
    }

    function deleteMail(e) {
        const listItem = e.currentTarget.parentElement.parentElement;

        const deleteListItem = document.createElement('li');
        const recipientNameSpan = document.createElement('span');
        const titleSpan = document.createElement('span');

        deleteListItem.appendChild(recipientNameSpan);
        deleteListItem.appendChild(titleSpan);

        const headings = Array.from(listItem.querySelectorAll('h4'));

        if (headings.length === 0) {
            recipientNameSpan.textContent = listItem.querySelector('span:nth-of-type(1)').textContent;
            titleSpan.textContent = listItem.querySelector('span:nth-of-type(2)').textContent;
        } else {
            recipientNameSpan.textContent = listItem.querySelector('h4:nth-of-type(2)').textContent.replace('Recipient Name: ', '');
            titleSpan.textContent = listItem.querySelector('h4:nth-of-type(1)').textContent;
        }

        deleteMailslist.appendChild(deleteListItem);

        listItem.remove();
    }

    function resetForm() {
        recipientNameInput.value = '';
        titleInput.value = '';
        messageTextarea.value = '';
    }

}

solve()