import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { booksByCategory, topBooks } from '../books API/books-api';
import { modalAboutBook } from './modal-window';

const booksContainerOne = document.querySelector('.books-container-one-cat');
const booksContainerAll = document.querySelector(
  '.books-container-all-cat-block'
);
const booksContainerAllTit = document.querySelector(
  '.books-container-all-cat-title'
);

const screenWidth = window.innerWidth;
let limit;

function templateBook(book) {
  return `<div class="book-item">
  <ul class="book-item-block" data-category="${book._id}">
    <li class="book-item-img">
      <img
        src="${book.book_image}"
        alt="${book.description}"
        srcset="${book.book_image}"
        width="335"
        height="485"
        class="book-image"
      />
      <p class="hidden-overflow">QUICK VIEW</p>
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
  booksContainerAllTit.innerHTML = '';

  const categoryText = category;
  const words = categoryText.split(' ');
  const lastWord = words.pop();
  const markup =
    `<h3 class="container-category-one">${
      words.join(' ') + ' <span class="last-word">' + lastWord + '</span>'
    }</h3>` +
    `<div class="books-container-one-cat-block">${templateBooks(books)}</div>`;

  booksContainerOne.innerHTML =
    markup +
    `<a href="#anchor-books">
  <button type="button" class="scroll-up hidden">UP</button>
</a>` +
    `<a href="#goback" >
    <button type="button" class="back-to-all-cat">GO BACK</button> 
</a>
`;

  scrollButtonVisibility();
}

function renderBooksAll(categories) {
  booksContainerOne.innerHTML = '';
  booksContainerAll.innerHTML = '';

  const title = `<h2 class="container-title">Best Sellers <span>Book</span></h2>`;
  let markup = '';

  categories.forEach(category => {
    markup += `<div class="cat-books-btn">
      <h3 class="container-category-all">${category.list_name}</h3>
    <div class="books-container-all-cat-block-bpt">${templateBooks(
      category.books
    )}</div>
    <button type="button" class="btn-seemore hidden" data-category="${
      category.list_name
    }">SEE MORE</button>
    </div>`;
  });
  booksContainerAllTit.innerHTML = title;
  booksContainerAll.innerHTML = markup +`<a href="#anchor-books">
  <button type="button" class="scroll-up hidden">UP</button>
</a>`;
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
    } else if (screenWidth >= 768 && screenWidth <= 1157) {
      limit = 3;
    } else {
      limit = 5;
    }
    let topBookList = await topBooks(category, limit);
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
  if (limit === 1 || limit === 3 || limit === 5) {
    showBtn();
  } else {
    hideBtn();
  }
}

function showBtn() {
  if (limit <= 5) {
    const btnSeemore = document.querySelectorAll('.btn-seemore');
    for (let i = 0; i < btnSeemore.length; i++) {
      btnSeemore[i].classList.remove('hidden');
    }
  }
}

function hideBtn() {
  if (limit >= 5) {
    const btnSeemore = document.querySelectorAll('.btn-seemore');
    for (let i = 0; i < btnSeemore.length; i++) {
      btnSeemore[i].classList.add('hidden');
    }
  }
}

async function showMoreBooks(selectedCategory) {
  try {
    let moreBooksBycat = await loadBooks(selectedCategory);
    moreBooks = moreBooksBycat.map(el => {
      el.books = el.books.slice(0, limit);
      return el;
    });
    renderBooksAll(moreBooks);
    visibBtn();
  } catch (error) {
    console.log(error);
  }
}

booksContainerAll.addEventListener('click', async event => {
  if (event.target && event.target.classList.contains('btn-seemore')) {
    event.preventDefault();
    const categoryFromButton = event.target.dataset.category;
    await showMoreBooks(categoryFromButton);
  }
});

// ==============////////MODAL LISTENERS//////////===============

booksContainerAll.addEventListener('click', async event => {
  if (event.target.closest('.book-item')) {
    event.preventDefault();
    const currentElem = event.target.closest('.book-item-block');
    const bookId = currentElem.dataset.category;
    if (bookId) {
      const result = await modalAboutBook(bookId);
      console.log(result);
    }
  }
});

booksContainerOne.addEventListener('click', async event => {
  event.preventDefault();
  if (event.target.closest('.book-item')) {
    const currentElem = event.target.closest('.book-item-block');
    const bookId = currentElem.dataset.category;
    if (bookId) {
      const result = await modalAboutBook(bookId);
      console.log(result);
    }
  }
});

// ==============////////IZI//////////===============

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

// ==============////////SCROLL//////////===============

window.addEventListener('scroll', scrollButtonVisibility);

function scrollButtonVisibility() {
  const scrollButtons = document.querySelectorAll('.scroll-up');
  const anchor = document.querySelector('#anchor-books');
  const anchorPosition = anchor.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  scrollButtons.forEach(button => {
    const buttonPosition = button.getBoundingClientRect().top;
    const buttonVisibilityThreshold = screenHeight * 0.9;

    if (
      Math.abs(anchorPosition - buttonPosition) <= buttonVisibilityThreshold
    ) {
      button.classList.add('hidden');
    } else {
      button.classList.remove('hidden');
    }
  });

  document.querySelectorAll('.scroll-up').forEach(button => {
    button.addEventListener('click', () => {
      const anchor = document.querySelector('#anchor-books');
      anchor.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.querySelector('.back-to-all-cat').addEventListener('click', () => {
    const booksContainerOne = document.querySelector(
      '.books-container-one-cat'
    );
    booksContainerOne.innerHTML = '';

    loadBooksAllCat();

    const containerAllCat = document.querySelector('.books-container-all-cat');
    containerAllCat.scrollIntoView({ behavior: 'smooth' });
  });
}

