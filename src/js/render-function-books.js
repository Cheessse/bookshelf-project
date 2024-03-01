'user strict';

const booksContainer = document.querySelector('.books-container');
const containerTitle = document.querySelector('.container-title');
const containerCategory = document.querySelector('.container-category');

function bookCreation({ book_image, title, author }) {
  const container = `<ul class="book-div">
 <li class="book-img"><img src="${book_image}" alt=""></li>
 <li class="book-title">${title}</li>
 <li class="author">${author}</li>
</ul>`;
  return container;
}

function booksCreation(books){
 return books.map(bookCreation).join('');
}

export function renderBooksAllCat({books,list_name}){
    const markup=booksCreation(books);
    containerTitle.textContent='Best Sellers Books';
    containerCategory.textContent=`'${list_name}'`;
    containerTitle.insertAdjacentHTML('afterbegin', containerTitle.textContent );
    containerCategory.insertAdjacentHTML('afterbegin', containerCategory.textContent );

    booksContainer.insertAdjacentHTML('beforeend', markup);
}

export function renderBooksByCat({books,list_name}){
    const markup=booksCreation(books);
    containerTitle.textContent=`'${list_name}'`;
    containerTitle.insertAdjacentHTML('afterbegin', containerTitle.textContent );

    booksContainer.insertAdjacentHTML('beforeend', markup);
}