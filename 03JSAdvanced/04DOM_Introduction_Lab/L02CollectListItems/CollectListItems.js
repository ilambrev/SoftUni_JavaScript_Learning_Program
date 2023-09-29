function extractText() {
    const liElements = Array.from(document.querySelectorAll('#items li'));

    let text = liElements.map(e => e.textContent).join('\n');

    document.querySelector('#result').textContent = text;

}