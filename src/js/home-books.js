import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { booksByCategory, topBooks } from '../books API/books-api';

const booksContainerOne = document.querySelector('.books-container-one-cat');
const booksContainerAll = document.querySelector(
  '.books-container-all-cat-block'
);
const booksContainerAllTit = document.querySelector(
  '.books-container-all-cat-title'
);
const btnSeemore = document.querySelectorAll('button');

const screenWidth = window.innerWidth;
let category;
let limit;

function templateBook(book) {
  return `<div class="book-item">
  <ul class="book-item-block">
    <li class="book-item-img">
      <img
        src="${book.book_image}"
        alt="${book.description}"
        srcset="${book.book_image}"
        width="335"
        height="485"
        class="book-image"
      />
    </li>
    <li class="book-item-title">${book.title}</li>
    <li class="book-item-author">${book.author}</li>
  </ul>
</div>`;
}

function templateBooks(books) {
  return books.map(templateBook).join('');
}

function renderBooks(books, category) {
  booksContainerOne.innerHTML = '';
  booksContainerAll.innerHTML = '';

  const categoryText = category;
  const words = categoryText.split(' ');
  const lastWord = words.pop();
  const markup =
    `<h3 class="container-category-one">${
      words.join(' ') + ' <span class="last-word">' + lastWord + '</span>'
    }</h3>` + templateBooks(books);

  booksContainerAll.innerHTML = markup;
}

function renderBooksAll(categories) {
  booksContainerOne.innerHTML = '';
  booksContainerAll.innerHTML = '';

  const title = `<h2 class="container-title">Best Sellers <span>Book</span></h2>`;
  let markup = '';

  categories.forEach(category => {
    markup +=
      `<h3 class="container-category-all">${category.list_name}</h3>` +
      templateBooks(category.books) +
      `<button type="button" id="btn-seemore" class="hidden" data-category="${category.list_name}">SEE MORE</button>`;
  });
  booksContainerAllTit.innerHTML = title;
  booksContainerAll.innerHTML = markup;
}

export async function loadBooks(selectedCategory) {
  try {
    const data = await booksByCategory(selectedCategory);
    renderBooks(data, selectedCategory);
  } catch (error) {
    showError('Sorry, there are no books for these category! ', 'red', 'white');
  }
}

export async function loadBooksAllCat(category) {
  try {
    if (screenWidth >= 375 && screenWidth <= 767) {
      limit = 1;
    } else if (screenWidth >= 768 && screenWidth <= 1279) {
      limit = 3;
    } else {
      limit = 5;
      return;
    }

    let topBookList = await topBooks(category,limit);
    topBookList = topBookList.map(el => {
      el.books = el.books.slice(0, limit);
      return el;
    });
    renderBooksAll(topBookList);
    visibBtn();
  } catch (error) {
    showError('Sorry, no books! ', 'red', 'white');
  }
}

function visibBtn() {
  if (limit === 1 || limit === 3) {
    showBtn();
  } else {
    hideBtn();
  }
}

function showBtn() {
  for (let i = 0; i < btnSeemore.length; i++) {
    btnSeemore[i].classList.remove('hidden');
  }
}

function hideBtn() {
  for (let i = 0; i < btnSeemore.length; i++) {
    btnSeemore[i].classList.add('hidden');
  }
}

btnSeemore.forEach(btn => {
  btn.addEventListener('click', async event => {
    const category = event.target.dataset.category;
    if (category) {
      await showMoreBooks(category);
    }
  });
});

async function showMoreBooks(category) {
  try {
    let limit;
    if (screenWidth >= 375 && screenWidth <= 767) {
      limit = 5;
    } else if (screenWidth >= 768 && screenWidth <= 1279) {
      limit = 5;
    } else {
      return;
    }

    let moreBooks = await topBooks(category,limit);
    moreBooks = moreBooks.map(el => {
      el.books = el.books.slice(0, limit);
      return el;
    });
    renderBooksAll(moreBooks);
  } catch (error) {
    showError('Sorry, no books! ', 'red', 'white');
  }
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
