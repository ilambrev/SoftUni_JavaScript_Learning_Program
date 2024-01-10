function create(words) {
    const contentDivElement = document.querySelector('#content');

    words.map(word => {
        const divElement = document.createElement('div');
        divElement.addEventListener('click', show);

        const paragraphElement = document.createElement('p');
        paragraphElement.style.display = 'none';
        paragraphElement.textContent = word;

        divElement.appendChild(paragraphElement);

        contentDivElement.appendChild(divElement);
    });

    function show(e) {
        e.currentTarget.querySelector('p').style.display = 'block';
    }
}