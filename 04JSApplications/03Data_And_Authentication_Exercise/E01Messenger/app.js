function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';

    const messagesTextarea = document.querySelector('#messages');
    const authorNameInput = document.querySelector('input[name="author"]');
    const messageContentInput = document.querySelector('input[name="content"]');
    const submitButton = document.querySelector('#submit');
    const refreshButton = document.querySelector('#refresh');

    submitButton.addEventListener('click', sendMessage);
    refreshButton.addEventListener('click', loadAllMessages);

    function loadAllMessages() {
        fetch(url)
            .then(res => res.json())
            .then(messagesObject => {

                const lines = [];

                Object.values(messagesObject).forEach(m => lines.push(`${m.author}: ${m.content}`));

                messagesTextarea.value = lines.join('\n');
            })
            .catch(err => console.log(err));
    }

    function sendMessage() {
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                author: authorNameInput.value,
                content: messageContentInput.value
            }),
        })
            .then(res => res.json())
            .then(message => {
                authorNameInput.value = '';
                messageContentInput.value = '';
            })
            .catch(err => console.log(err));
    }
}

attachEvents();