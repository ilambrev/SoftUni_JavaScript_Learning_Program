function search() {
   const townsLiElements = Array.from(document.querySelectorAll('#towns li'));
   const resultDivElement = document.querySelector('#result');
   const textToSearch = document.querySelector('#searchText').value;

   townsLiElements.forEach(li => {
      li.style.textDecoration = '';
      li.style.fontWeight = '';
   });

   textToSearch.value = '';

   const matches = townsLiElements
      .filter(li => li.textContent.includes(textToSearch))
      .map(li => {
         li.style.textDecoration = 'underline';
         li.style.fontWeight = 'bold';
      });

   resultDivElement.textContent = `${matches.length} matches found`;

}