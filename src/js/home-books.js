import axios from 'axios';

const booksContainer = document.querySelector('.books-container-one-cat');
const booksContainerAll = document.querySelector('.book-item');
const btnSeemore = document.querySelector('#btn-seemore');
const categoryElement = document.querySelector('.container-category-one');

let booksToLoad = 5;

async function booksByCategory(selectedCategory) {
  const BASE_URL = 'https://books-backend.p.goit.global/books/category';
  const encodeCat = encodeURIComponent(selectedCategory);
  const url = `${BASE_URL}?category=${encodeCat}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const res = await axios.get(url, options);
  return res.data;
}

async function topBooks(category, screenSize) {
  const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';
  const encodeCat = encodeURIComponent(category);
  const url = category ? `${BASE_URL}?category=${encodeCat}` : BASE_URL;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (screenSize === 'mobile') {
    booksToLoad = 1;
  } else if (screenSize === 'tablet') {
    booksToLoad = 3;
  }

  const res = await axios.get(url, options);
  return res.data.slice(0, booksToLoad);
}

function templateBook(book) {
  return ` <li class="book-item-img"><img src="${book.book_image}" alt="${book.description}" srcset="${book.book_image}" width="335" height="485" class="book-image">
  </li>
    <li class="book-item-title">${book.title}</li>
    <li class="book-item-author">${book.author}</li>
  </li>`;
}

function templateBooks(books) {
  return books.map(templateBook).join('');
}

function renderBooks(books, category) {
  booksContainer.innerHTML = '';
  booksContainerAll.innerHTML = '';

  const categoryText = category;
  const words = categoryText.split(' ');
  const lastWord = words.pop();
  const markup =
    `<h3 class="container-category-one">${words.join(' ') + ' <span class="last-word">' + lastWord + '</span>'}</h3>` +
    templateBooks(books);

  booksContainer.innerHTML = markup;
}

function renderBooksAll(categories) {
  booksContainer.innerHTML = '';
  booksContainerAll.innerHTML = '';

  const title = `<h2 class="container-title">Best Sellers <span>Book</span></h2>`;
  let markup = '';
  for (const category of categories) {
    markup +=
      `<h3 class="container-category-all">${category.list_name}</h3>` +
      templateBooks(category.books);
  }

  booksContainerAll.innerHTML = title + markup;
}

export async function loadBooks(selectedCategory) {
  try {
    const data = await booksByCategory(selectedCategory);
    renderBooks(data, selectedCategory);
  } catch (error) {
    showError('Sorry, there are no books for these category! ', 'red', 'white');
  }
}

export async function loadBooksAllCat() {
  try {
    const data = await topBooks();
    renderBooksAll(data);
  } catch (error) {
    showError('Sorry, no books! ', 'red', 'white');
  }
}

function showBtn() {
  btnSeemore.classList.remove('hidden');
}

function hideBtn() {
  btnSeemore.classList.add('hidden');
}

// btnSeemore.addEventListener('click', showMoreBooks);

// function showMoreBooks{

// }

function showError(text, bgColor, txtColor) {
  iziToast.error({
    position: 'topRight',
    message: text,
    messageColor: txtColor,
    messageSize: '16',
    messageLineHeight: '15',
    backgroundColor: bgColor,
    timeout: 5000,
    displayMode: 2,
    close: true,
    closeOnEscape: true,
    closeOnClick: true,
  });
}
