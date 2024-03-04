import axios from 'axios';
import { categoryList } from '../books API/books-api';

const booksContainer = document.querySelector('.books-container');
const categoryOne = document.querySelector('.container-category-one');

let page;

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

async function topBooks() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = await axios.get(BASE_URL, options);
  return res.data;
};

function templateBook(book) {
  return `<li class="book-item" data-id="${book.id}">
  <img src="${book.book_image}" alt="${book.description}" srcset="${book.book_image}" width="335" height="535" class="book-image">
  <p class="book-title">${book.title}</p>
  <p class="book-author">${book.author}</p>
</li>`;
};

function templateBooks(books) {
  return books.map(templateBook).join('');
};

function renderBooks(books, category) {
  const markup = `<h3 class="container-category-one">${category}</h3>`+ templateBooks(books);
  booksContainer.innerHTML = markup;
};

function renderBooksAll(books, category) {
  const title=`<h2 class="container-title">Best Sellers <span>Book</span></h2>`;
  const markup = `<h3 class="container-category-all">${category}</h3>`+ templateBooks(books);
  booksContainer.innerHTML= title + markup;
};

export async function loadBooks(selectedCategory) {
  try {
    const data = await booksByCategory(selectedCategory);
    renderBooks(data, selectedCategory);
  } catch (error) {
    console.error(error);
  }
};

export async function loadBooksAllCat() {
  try {
    const categories = await categoryList();
    for (const category of categories) {
      console.log(`Category: ${category.list_name}`);
      const data = await topBooks(category.list_name);
      renderBooksAll(data, category.list_name);
      console.log('Books:');
      console.log(data);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
