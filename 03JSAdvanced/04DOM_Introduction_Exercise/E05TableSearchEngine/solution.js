function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      const tableRows = Array.from(document.querySelectorAll('.container tbody tr'));
      const inputTextElement = document.querySelector('#searchField');

      tableRows.forEach(t => t.classList.remove('select'));

      const textToSearch = inputTextElement.value;

      tableRows.forEach(r => {

         for (cell of Array.from(r.querySelectorAll('td')).map(td => td.textContent)) {

            if (cell.includes(textToSearch)) {
               r.classList.add('select');
               break;
            }

         }

      });

      inputTextElement.value = '';

   }

}