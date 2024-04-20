import { render } from '../node_modules/lit-html/lit-html.js';
import { getAllRows } from './api.js';
import rowsTemplate from './templates/rows.js';

const tableBody = document.querySelector('.container tbody');
const searchInputField = document.querySelector('#searchField');
const searchButton = document.querySelector('#searchBtn');

searchButton.addEventListener('click', onClick);

const rows = Object.values(await getAllRows().then(res => res.json()));

render(rowsTemplate(rows), tableBody);

function resetTableRows() {
   rows.map(r => r.matched = false);
}

function onClick() {
   const searchedText = searchInputField.value.toLowerCase();

   if (searchedText === '') {
      return;
   }

   resetTableRows();

   rows.map(r => {
      const rowData = [r.firstName, r.lastName, r.email, r.course];

      if (rowData.filter(c => c.toLowerCase().includes(searchedText)).length > 0) {
         r.matched = true;
      }

      return r;
   });

   searchInputField.value = '';
   render(rowsTemplate(rows), tableBody);
}