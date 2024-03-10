const URL = 'https://books-backend.p.goit.global/books/';

import amazon from '../img/symbol-defs.svg#icon-amazon';
import appleBook from '../img/symbol-defs.svg#icon-ibooks';
import trash from '../img/symbol-defs.svg#icon-trash';

const placeholder = document.querySelector('.shopping-list-default-div');
const shoppingList = document.querySelector('.shopping-list-render');

async function retrieveBooksFromLS() {
  try {
    const arrayLS = JSON.parse(localStorage.getItem('idBooks')) || [];
    if (!arrayLS || arrayLS.length === 0) {
      console.log('Масив ID порожній або відсутній.');
      return;
    }

    const promises = arrayLS.map(async id => {
      const response = await fetch(`${URL}/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data for ID: ${id}`);
      }
      return response.json();
    });
    const responseData = await Promise.all(promises);
    renderData(responseData);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

function renderData(dataArray) {
  if (dataArray.length === 0) {
    placeholder.style.display = 'block';
    return;
  }
  const markup = dataArray
    .map(book => {
      return `
      <div class="card">
        <img src="${book.book_image}" alt="book cover" class="book-cover" >
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
    `;
    })
    .join('');

  shoppingList.insertAdjacentHTML('beforeend', markup);
  if (dataArray.length === 0) {
    placeholder.style.display = 'block';
  } else {
    placeholder.style.display = 'none';
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
retrieveBooksFromLS();

function removeFromShoppingList(bookId) {
  const arrayLS = JSON.parse(localStorage.getItem('idBooks')) || [];

  if (!arrayLS || arrayLS.length === 0) {
    return;
  }

  const updatedBooks = arrayLS.filter(book_id => book_id !== bookId);
  localStorage.setItem('idBooks', JSON.stringify(updatedBooks));
}

function isCardEmpty() {
  const shoppingList = document.querySelector('.shopping-list-render');
  return shoppingList.children.length === 0;
}

function updateCardView() {
  const supportBlock = document.querySelector('.support-ukraine');

  if (isCardEmpty()) {
    placeholder.style.display = 'block';
    supportBlock.style.display = 'block';
  } else {
    placeholder.style.display = 'none';
    supportBlock.style.display = 'block';
  }
}
updateCardView();
