import { render } from '../node_modules/lit-html/lit-html.js';
import { towns } from './data/towns.js';
import townsListTemplate from './templates/townsList.js';

const townsContainer = document.querySelector('#towns');
const result = document.querySelector('#result');
const inputField = document.querySelector('#searchText')
const searchButton = document.querySelector('button');

searchButton.addEventListener('click', search);

function cleanTownsState() {
   return towns.map(t => {
      const town = { name: t, matched: false };
      return town;
   });
}

render(townsListTemplate(cleanTownsState()), townsContainer);

function search(e) {
   e.preventDefault();

   const searchedText = inputField.value;
   const townsList = cleanTownsState();
   const matches = townsList.filter(t => t.name.includes(searchedText));
   matches.forEach(m => townsList.find(t => t.name === m.name).matched = true);

   render(townsListTemplate(townsList), townsContainer);

   result.textContent = `${matches.length} matches found`;
}