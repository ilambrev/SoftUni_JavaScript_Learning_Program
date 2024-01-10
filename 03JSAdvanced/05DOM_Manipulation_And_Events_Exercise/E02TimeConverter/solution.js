function attachEventsListeners() {
    const daysInput = document.querySelector('#days');
    const daysButton = document.querySelector('#daysBtn');
    const hoursInput = document.querySelector('#hours');
    const hoursButton = document.querySelector('#hoursBtn');
    const minutesInput = document.querySelector('#minutes');
    const minutesButton = document.querySelector('#minutesBtn');
    const secondsInput = document.querySelector('#seconds');
    const secondsButton = document.querySelector('#secondsBtn');

    daysButton.addEventListener('click', convert);
    hoursButton.addEventListener('click', convert);
    minutesButton.addEventListener('click', convert);
    secondsButton.addEventListener('click', convert);

    function convert(e) {
        const unit = e.currentTarget.id.replace('Btn', '');
        const unitValue = Number(e.currentTarget.parentElement.querySelector('input[type=text]').value);

        switch (unit) {
            case 'days':
                hoursInput.value = unitValue * 24;
                minutesInput.value = unitValue * 1440;
                secondsInput.value = unitValue * 86400;
                break;
            case 'hours':
                daysInput.value = unitValue / 24;
                minutesInput.value = unitValue * 60;
                secondsInput.value = unitValue * 3600;
                break;
            case 'minutes':
                daysInput.value = unitValue / 1440;
                hoursInput.value = unitValue / 60;
                secondsInput.value = unitValue * 60;
                break;
            case 'seconds':
                daysInput.value = unitValue / 86400;
                hoursInput.value = unitValue / 3600;
                minutesInput.value = unitValue / 60;
                break;
        }
    }
}