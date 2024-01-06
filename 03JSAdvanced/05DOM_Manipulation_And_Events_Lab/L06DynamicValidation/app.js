function validate() {
    const inputField = document.querySelector('#email');

    inputField.addEventListener('change', onChange);

    function onChange() {

        let regexp = /^[a-z]+@[a-z]+.[a-z]+$/gm;

        const inputText = inputField.value;

        let match = regexp.exec(inputText);

        if (match === null) {
            inputField.classList.add('error');
        } else {
            inputField.classList.remove('error');
        }
    }

}