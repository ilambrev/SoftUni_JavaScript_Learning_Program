function extract(content) {

    const regexp = /\(([\w ]+)\)/gm;

    const element = document.querySelector(`#${content}`);

    const extractedWords = [...element.textContent.matchAll(regexp)].map(w => w[1]).join(', ');

    const newParagraphElement = document.createElement('p');
    newParagraphElement.textContent = extractedWords;

    document.querySelector('body').insertBefore(newParagraphElement, document.querySelector('button'));

    return extractedWords;

}