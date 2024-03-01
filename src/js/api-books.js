'user strict';

import axios from 'axios';

export async function booksApi() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/category-list';

  const url = `${BASE_URL}`;

  const options = {
    method: 'GET',
  };

  const res = await axios.get(url, options);
  return res.data;
}

console.log(booksApi());

export async function booksApibyCategory(category) {
    const BASE_URL = 'https://books-backend.p.goit.global/books/category?category=';
  
    const url = `${BASE_URL}${category}`;
  
    const options = {
      method: 'GET',
      params: {
        list_name:category,
      },
    };
  
    const res = await axios.get(url, options);
    return res.data;
  }


  console.log(booksApibyCategory('Combined Print and E-Book Nonfiction'));