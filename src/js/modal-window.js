import { booksId } from '../books API/books-api';
import iziToast from 'izitoast';
import { openAndCloseModal } from './open-close-modal';
import { localStorageAPI } from './local-storage';

const bookIMG = document.querySelector('.popup-book-image');
const bookTitle = document.querySelector('.popup-book-title');
const bookAuthor = document.querySelector('.popup-book-author');
const bookReview = document.querySelector('.popup-book-review');
const linkAmazon = document.querySelector('.popup-shopping-links-icon.amazon');
const linkBook = document.querySelector('.popup-shopping-links-icon.book');
const btn = document.querySelector('#add');
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
  if (e.target.disabled) {
    return;
  }
  const id = e.target.attributes.id.value;
  if (btn.textContent === 'Add to shopping list') {
    addBook(id);
  } else {
    removeBook(id);
  }
}

export function addBook(id) {
  let idBooks = localStorageAPI.getAllBooks();
  idBooks.push(id);
  localStorageAPI.addToShoppingList(idBooks);
  btn.textContent = 'Remove from the shopping list';
  addMessage.hidden = false;
  updateShoppingList();
}

export function removeBook(id) {
  let idBooks = localStorageAPI.getAllBooks();

  idBooks.splice(idBooks.indexOf(id), 1);
  localStorageAPI.addToShoppingList(idBooks);
  btn.textContent = 'Add to shopping list';
  addMessage.hidden = true;
  updateShoppingList();
}

export function checkLocalStorage(book) {
  let permanentLS = localStorageAPI.getItem(`idBooks`);

  if (!permanentLS || permanentLS === '' || !permanentLS.includes(book.id)) {
    btn.textContent = 'Add to shopping list';
  } else {
    btn.textContent = 'Remove from the shopping list';
    addMessage.hidden = false;
  }
  btn.attributes.id.value = book.id;
}
export function updateShoppingList() {
  try {
    const shoppingList = localStorageAPI.getAllBooks();
    localStorage.setItem('idBooks', JSON.stringify(shoppingList));
  } catch (error) {
    console.error('Error updating shopping list:', error.message);
  }
}
export async function handleBookClick(event) {
  event.preventDefault();
  const currentElem = event.target.closest('.book-item');
  if (currentElem) {
    const bookId = currentElem.attributes.id.value;
    modalAboutBook(bookId);
  }
}
