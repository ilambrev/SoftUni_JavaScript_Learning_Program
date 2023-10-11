function toggle() {

    const buttonSpanElement = document.querySelector('#accordion .button');
    const textDivElement = document.querySelector('#extra');

    if (buttonSpanElement.textContent == 'More') {
        textDivElement.style.display = 'block';
        buttonSpanElement.textContent = 'Less';
    } else if (buttonSpanElement.textContent == 'Less') {
        textDivElement.style.display = 'none';
        buttonSpanElement.textContent = 'More';
    }

}