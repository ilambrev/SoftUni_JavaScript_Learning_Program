function colorize() {

    const tableRowElements = Array.from(document.querySelectorAll('tr'));

    for (let i = 1; i < tableRowElements.length; i += 2) {
        tableRowElements[i].style.backgroundColor = 'Teal';
    }

}