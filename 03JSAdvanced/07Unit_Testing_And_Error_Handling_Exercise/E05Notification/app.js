function notify(message) {
    const notificationDivElement = document.querySelector('#notification');

    notificationDivElement.addEventListener('click', hide);

    notificationDivElement.textContent = message;
    notificationDivElement.style.display = 'block';

    function hide() {
        notificationDivElement.textContent = '';
        notificationDivElement.style.display = 'none';
    }

}