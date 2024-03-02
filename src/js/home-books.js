// import { categoryList } from '../books API/books-api';

import { booksByCategory } from '../books API/books-api';

import { topBooks } from '../books API/books-api';

import { renderBooksAllCat } from './render-function-books';

import { renderBooksByCat } from './render-function-books';

const categoryBlock=document.querySelector('#category-list')

let page;

export async function loadBooks(e) {
  e.preventDefault();
  page = 1;
  categoryName=categoryBlock.querySelectorAll('#p-list')
  try {
    const data = await booksByCategory();
    const dataTop = await topBooks();
    if (data.target.list_name === categoryName) {
      renderBooksByCat(data);
    } else {
      renderBooksAllCat(dataTop);
    }
  } catch (error) {
    console.log(error);
  }

  e.target.reset();
}

// function loadMoreBooks() {
//   page += 1;
// }
