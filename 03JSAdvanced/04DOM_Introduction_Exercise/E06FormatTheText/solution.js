function solve() {

  const inputText = document.querySelector('#input').value;
  const outputDiv = document.querySelector('#output');

  const sentences = inputText.split('.').map(s => s.trim()).filter(s => s.length > 0);

  for (let i = 0; i < sentences.length; i += 3) {
    let paragraphText = sentences.length - i < 3 ? sentences.slice(i, sentences.length).join('. ') : sentences.slice(i, i + 3).join('. ');
    paragraphText = paragraphText + '.';

    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = paragraphText;

    outputDiv.appendChild(paragraphElement);
  }
  
}