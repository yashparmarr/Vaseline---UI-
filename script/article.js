
const searchButton = document.getElementById('searchButton');
const searchPage = document.getElementById('searchPage');
const closeSearchPage = document.getElementById('closeSearchPage');

searchPage.style.display = 'none';

searchButton.addEventListener('click', () => {
  searchPage.style.display = 'block';
});


closeSearchPage.addEventListener('click', () => {
  searchPage.style.display = 'none'; 
});

console.log('Script is running');
console.log(searchButton, searchPage, closeSearchPage);

  // console.log(searchButton,searchPage,closeSearchPage);