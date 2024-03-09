import axios from 'axios';

const BASE = 'https://books-backend.p.goit.global/books';

export async function categoryList() {
  const URL = 'https://books-backend.p.goit.global/books/category-list';

  const options = {
    method: 'GET',
  };

  const res = await axios.get(URL, { options });
  return res.data;
}

// export async function booksId() {
//   const URL = 'https://books-backend.p.goit.global/books/{id}';

//   const options = {
//     method: 'GET',
//   };

//   const res = await axios.get(URL, { options });
//   return res.data;
// }

export async function booksId(bookId) {
  bookId = bookId.trim();
  const URL = `${BASE}/${bookId}`;
  const response = await axios.get(URL);
  return response.data;
}

export async function booksByCategory(selectedCategory) {
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

export async function topBooks(category, limit) {
  const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';
  const encodeCat = encodeURIComponent(category);
  let url;
  if (limit) {
    url = `${BASE_URL}?category=${encodeCat}&limit=${limit}`;
  } else {
    url = `${BASE_URL}?category=${encodeCat}`;
  }
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const res = await axios.get(url, options);
  return res.data;
}

// ==================================================

// export async function getCategories() {
//   const URL = `${BASE}/category-list`;
//   const response = await axios.get(URL);
//   return response.data;
// }

// export async function getPopularBooks() {
//   const URL = `${BASE}/top-books`;
//   const response = await axios.get(URL);
//   return response.data;
// }

// export async function getBooksByCategory(selectedCategory) {
//   selectedCategory = selectedCategory.trim();
//   const params = { category: selectedCategory };
//   const URL = `${BASE}/category`;
//   const response = await axios.get(URL, { params });
//   return response.data;
// }
