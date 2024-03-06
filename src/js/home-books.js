import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { categoryList } from '../books API/books-api';

const booksContainer = document.querySelector('.books-container-one-cat');
const booksContainerAll = document.querySelector('.book-item');
const btnSeemore = document.querySelector('#btn-seemore');

const screenWidth = window.innerWidth;
let category;

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

async function topBooks(category, limit) {
  const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';
  const encodeCat = encodeURIComponent(category);
  let url;
  if (limit) {
    url = `${BASE_URL}?category=${encodeCat}&limit=${limit}`;
  } else {
    url = `${BASE_URL}?category=${encodeCat}`;
  }
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const res = await axios.get(url, options);
  return res.data;
}

function templateBook(book) {
  return ` <li class="book-item-img"><img src="${book.book_image}" alt="${book.description}" srcset="${book.book_image}" width="335" height="485" class="book-image">
  </li>
    <li class="book-item-title">${book.title}</li>
    <li class="book-item-author">${book.author}</li>
  </li>`;
}

function templateBooks(books) {
  return books.map(book => templateBook(book)).join('');
}

function renderBooks(books, category) {
  booksContainer.innerHTML = '';
  booksContainerAll.innerHTML = '';

  const categoryText = category;
  const words = categoryText.split(' ');
  const lastWord = words.pop();
  const markup =
    `<h3 class="container-category-one">${
      words.join(' ') + ' <span class="last-word">' + lastWord + '</span>'
    }</h3>` + templateBooks(books);

  booksContainer.innerHTML = markup;
}

function renderBooksAll(categories) {
  booksContainer.innerHTML = '';
  booksContainerAll.innerHTML = '';

  const title = `<h2 class="container-title">Best Sellers <span>Book</span></h2>`;
  let markup = '';

  categories.forEach(category => {
    markup +=
      `<h3 class="container-category-all">${category.category}</h3>` +
      templateBooks(category.books);
  });

  booksContainerAll.innerHTML = title + markup;
}

export async function loadBooks(selectedCategory) {
  try {
    hideBtn();
    const data = await booksByCategory(selectedCategory);
    renderBooks(data, selectedCategory);
  } catch (error) {
    showError('Sorry, there are no books for these category! ', 'red', 'white');
  }
}

export async function loadBooksAllCat(category) {
  try {
    let limit;
    if (screenWidth >= 375 && screenWidth <= 767) {
      limit = 1;
      // showBtn();
    } else if (screenWidth >= 768 && screenWidth <= 1279) {
      limit = 3;
      // showBtn();
    } else {
      limit = 5;
      return;
    }

    const allCat = await categoryList(category);
    const allPromises = allCat.map(async cat => {
      const allBooks = await topBooks(cat.list_name, limit);
      const slicedBooks = allBooks.slice(0, limit);
      return {
        category: cat.list_name,
        books: slicedBooks,
      };
    });

    const categoriesWithBooks = await Promise.all(allPromises);
    renderBooksAll(categoriesWithBooks);
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

btnSeemore.addEventListener('click', event => {
  event.preventDefault();
  showMoreBooks(category);
});

async function showMoreBooks(category) {
  // try {
  //   let limit;
  //   if (screenWidth >= 375 && screenWidth <= 767) {
  //     limit = 1;
  //     limit += 4;
  //   } else if (screenWidth >= 768 && screenWidth <= 1279) {
  //     limit = 3;
  //     limit += 2;
  //   } else {
  //     hideBtn();
  //     return;
  //   }
  //   const allCat = await categoryList(category);
  //   const filteredAllCat = await topBooks(allCat.books);
  //   const slicedBooks = filteredAllCat.slice(0, limit);
  //   renderBooksAll(slicedBooks);
  // } catch (error) {
  //   showError('Sorry, no books! ', 'red', 'white');
  // }
}

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
