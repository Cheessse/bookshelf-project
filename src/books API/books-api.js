import axios from 'axios';

export async function categoryList() {
  const URL = 'https://books-backend.p.goit.global/books/category-list';

  const options = {
    method: 'GET',
  };

  const res = await axios.get(URL, { options });
  return res.data;
}

// export async function booksByCategory(category) {
//   const URL = 'https://books-backend.p.goit.global/books/category';

//   const options = {
//     method: 'GET',
//     params: {
//       category: category,
//     },
//   };

//   const res = await axios.get(URL, { options });
//   return res.data;
// }

// export async function topBooks() {
//   const URL = 'https://books-backend.p.goit.global/books/top-books';

//   const options = {
//     method: 'GET',
//   };

//   const res = await axios.get(URL, { options });
//   return res.data;
// }

export async function booksId() {
  const URL = 'https://books-backend.p.goit.global/books/{id}';

  const options = {
    method: 'GET',
  };

  const res = await axios.get(URL, { options });
  return res.data;
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
