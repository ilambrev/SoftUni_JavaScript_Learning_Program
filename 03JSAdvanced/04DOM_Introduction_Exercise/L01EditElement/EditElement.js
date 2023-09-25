function editElement(headingElement, textToReplace, newText) {

    headingElement.textContent = headingElement.textContent.replace(new RegExp(textToReplace, 'g'), newText);

}