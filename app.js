const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');
const booktype = document.querySelector('#booktype');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  // Validation
  if (title.value == '' && author.value == '' && year.value == '') {
    alert('Please input your information.');
  } else {
    const newRow = document.createElement('tr');

    // Creating new title
    const newTitle = document.createElement('th');
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // Creating new Author
    const newAuthor = document.createElement('th');
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);
    
    // Creating new Type/Genre
    const newType = document.createElement('th');
    newType.innerHTML = booktype.value;
    newRow.appendChild(newType);

    // Creating new Year
    const newYear = document.createElement('th');
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    // Displaying in UI
    bookList.appendChild(newRow);
  }
});
