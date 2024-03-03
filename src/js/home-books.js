// import { categoryList } from '../books API/books-api';

import { booksByCategory } from '../books API/books-api';

import { topBooks } from '../books API/books-api';

import { renderBooksAllCat } from './render-function-books';

import { renderBooksByCat } from './render-function-books';

// import categoryBlock from './home-menu';

const categoryDiv=categoryBlock.querySelectorAll('#p-list');

let page;

export async function loadBooks(e) {
  e.preventDefault();
  page = 1;
  let selectedCategoryName=categoryDiv.textContent;
  try {
    const data = await booksByCategory();
    const dataTop = await topBooks();
    if (data.target.list_name === selectedCategoryName) {
      renderBooksByCat(data);
    } else {
      renderBooksAllCat(dataTop);
    }
  } catch (error) {
    console.log(error);
  }
}

// function loadMoreBooks() {
//   page += 1;
// }
