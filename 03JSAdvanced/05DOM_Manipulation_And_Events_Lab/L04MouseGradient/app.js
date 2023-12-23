function attachGradientEvents() {
    const mouseMoveAreaElement = document.querySelector('#gradient');
    const resultElement = document.querySelector('#result');

    mouseMoveAreaElement.addEventListener('mousemove', (e) => {
        const scale = e.currentTarget.clientWidth / 100;
        let mousePosition = Math.floor((e.offsetX) / scale);
        resultElement.textContent = `${mousePosition}%`;
    });

}