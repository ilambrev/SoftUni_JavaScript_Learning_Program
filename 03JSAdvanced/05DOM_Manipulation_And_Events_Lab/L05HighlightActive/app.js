function focused() {

    const headingElements = Array.from(document.querySelectorAll('input'));

    headingElements.map(input => {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    });

    function onFocus(e) {
        e.currentTarget.parentElement.classList.add('focused');
    }

    function onBlur(e) {
        e.currentTarget.parentElement.classList.remove('focused');
    }

}