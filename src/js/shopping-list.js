import amazon from '../img/symbol-defs.svg#icon-amazon';
import appleBook from '../img/symbol-defs.svg#icon-ibooks';
import trash from '../img/symbol-defs.svg#icon-trash';
import { SHOPPING_LIST_KEY } from './local-storage';

const placeholder = document.querySelector('.shopping-list-default-div');

function renderBooksFromLS() {
  const booksLS = JSON.parse(localStorage.getItem(SHOPPING_LIST_KEY)) || [];

  const booksList = document.querySelector('.shopping-list-render');
  booksList.innerHTML = '';

  if (booksLS.length === 0) {
    placeholder.style.display = 'block';
  } else {
    const markup = booksLS
      .map(
        book => `
       <div class="card">
        <img src="${book.book_image}" alt="book cover" class="book-cover">
        <div class="about">
          <h2 class="book-title">${book.title}</h2>
          <p class="book-category">${book.list_name}</p>
          <p class="book-description">${book.description}</p>
          <p class="book-author">${book.author}</p>
        </div>
           <div class="buy">
        <a href="${book.buy_links[0].url}" target="_blank">
          <svg class="amazon" width="16" height="16">
            <use href="${amazon}"></use>
          </svg>
        </a>
        <a href="${book.buy_links[1].url}" target="_blank">
          <svg class="ibook" width="16" height="16">
            <use href="${appleBook}"></use>
          </svg>
        </a>
      </div>
      <button data-book-id="${book._id}" class="delete-btn">
        <div class="icon-trash">
          <svg class="trash" width="16" height="16">
            <use href="${trash}"></use>
          </svg>
        </div>
      </button>
       </div>
  `
      )
      .join('');

    booksList.insertAdjacentHTML('beforeend', markup);
  }

  const deleteBtn = document.querySelectorAll('.delete-btn');

  deleteBtn.forEach(button => {
    button.addEventListener('click', () => {
      const bookId = button.getAttribute('data-book-id');
      removeFromShoppingList(bookId);

      const card = button.closest('.card');
      if (card) {
        card.remove();
      }

      updateCardView();
    });
  });
}

renderBooksFromLS();

function removeFromShoppingList(bookId) {
  const savedBooks = getLocalStorageItem(SHOPPING_LIST_KEY);

  if (!savedBooks || savedBooks.length === 0) {
    return;
  }

  const updatedBooks = savedBooks.filter(book => book._id !== bookId);

  toLocalStorage(SHOPPING_LIST_KEY, updatedBooks);
}

function isCardEmpty() {
  const shoppingList = document.querySelector('.shopping-list-render');
  return shoppingList.children.length === 0;
}

function updateCardView() {
  const supportBlock = document.querySelector('.support-ukraine');

  if (isCardEmpty()) {
    placeholder.style.display = 'block';
    supportBlock.style.display = 'none';
  } else {
    placeholder.style.display = 'none';
    supportBlock.style.display = 'block';
  }
}
