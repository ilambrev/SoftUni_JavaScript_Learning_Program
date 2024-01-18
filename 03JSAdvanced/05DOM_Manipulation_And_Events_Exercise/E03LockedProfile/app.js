function lockedProfile() {
    const showMoreButtons = Array.from(document.querySelectorAll('button'));

    showMoreButtons.map(button => button.addEventListener('click', showMore));

    function showMore(e) {
        const unlockRadioButton = e.currentTarget.parentElement.querySelector('input[value=unlock]');
        const additionalInfo = e.currentTarget.parentElement.querySelector('div');

        if (unlockRadioButton.checked) {
            additionalInfo.style.display = 'inline-block';
            e.currentTarget.textContent = 'Hide it';
            e.currentTarget.removeEventListener('click', showMore);
            e.currentTarget.addEventListener('click', hide);
        }
    }

    function hide(e) {
        const unlockRadioButton = e.currentTarget.parentElement.querySelector('input[value=unlock]');
        const additionalInfo = e.currentTarget.parentElement.querySelector('div');

        if (unlockRadioButton.checked) {
            additionalInfo.style.display = 'none';
            e.currentTarget.textContent = 'Show more';
            e.currentTarget.removeEventListener('click', hide);
            e.currentTarget.addEventListener('click', showMore);
        }
    }
}