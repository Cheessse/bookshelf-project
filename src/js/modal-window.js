import { booksId } from '../books API/books-api';
import iziToast from 'izitoast';
import { openAndCloseModal } from './open-close-modal';

const bookIMG = document.querySelector('.popup-book-image');
const bookTitle = document.querySelector('.popup-book-title');
const bookAuthor = document.querySelector('.popup-book-author');
const bookReview = document.querySelector('.popup-book-review');
const linkAmazon = document.querySelector('.popup-shopping-links-icon.amazon');
const linkBook = document.querySelector('.popup-shopping-links-icon.book');
const btn = document.querySelector('.modal-btn-add-to-shopinglist');
const addMessage = document.querySelector('.under-button-text');
addMessage.hidden = true;

btn.addEventListener('click', addOrRemoveBook);

export async function modalAboutBook(bookId) {
  try {
    const book = await booksId(bookId);

    checkLocalStorage(book);

    bookIMG.attributes.src.value = book.book_image;
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookReview.textContent = book.description;
    linkAmazon.attributes.href.value = book.buy_links[0].url;
    linkBook.attributes.href.value = book.buy_links[1].url;

    openAndCloseModal();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Books was not found : ${error.message}`,
    });
  }
}

export function addOrRemoveBook(e) {
 
  const id = e.target.attributes.id.value;
  if (btn.textContent === 'Add to shopping list') {
    addBook(id);
  } else {
    removeBook(id);
  }
}

export function addBook(id) {
  let idBooks = localStorage.getItem('idBooks');

  if (idBooks === 'undefined' || !idBooks || idBooks === '') {
    idBooks = [];
    localStorage.setItem('idBooks', JSON.stringify(idBooks));
  }

  idBooks = JSON.parse(localStorage.getItem('idBooks'));

  idBooks.push(id);
  localStorage.setItem('idBooks', JSON.stringify(idBooks));
  btn.textContent = 'Remove from the shopping list';
  addMessage.hidden = false;

}

export function removeBook(id) {
  let idBooks = JSON.parse(localStorage.getItem('idBooks'));

  idBooks.splice(idBooks.indexOf(id), 1);
  localStorage.setItem('idBooks', JSON.stringify(idBooks));
  btn.textContent = 'Add to shopping list';
  addMessage.hidden = true;
}

export function checkLocalStorage(book) {
  let contantLS = localStorage.getItem('idBooks');

  if (!contantLS || contantLS === '' || !contantLS.includes(book._id)) {
    btn.textContent = 'Add to shopping list';
    addMessage.hidden = true;
  } else {
    btn.textContent = 'Remove from the shopping list';
    addMessage.hidden = false;
  }
  btn.attributes.id.value = book._id;
}
