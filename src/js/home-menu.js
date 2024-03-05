
// import { categoryList } from '../books API/books-api';
// import { loadBooks } from './home-books';
// const categoryBlock = document.querySelector("#category-list");
// export default categoryBlock;

// window.onload = function () {
//     const myCategoryList = document.getElementById("category-list");
//     const title = document.createElement('li');
//     title.textContent = "ALL CATEGORIES";
//     title.id = "title";
//     myCategoryList.appendChild(title);
//     categoryList().then(categories => {
//         categories.forEach(function (category) {
//             const paragraph = document.createElement('p'); // создаем <p> для кажд элем списка
//             paragraph.textContent = category.list_name;
//             paragraph.id = "p-list";
//             paragraph.addEventListener('click', loadBooks); //Вызываем функцию loadBooks при клике на элемент
//             myCategoryList.appendChild(paragraph);
//         });
//     }).catch(error => {
//         console.error('Error fetching data;', error);
//     });
// };
// ! ============================================================================================================*/

import { categoryList } from '../books API/books-api';
import { loadBooks } from './home-books';
import { loadBooksAllCat } from './home-books';

const categoryBlock = document.querySelector('#category-list');

window.onload = function () {
    const myCategoryList = document.getElementById('category-list');
    const title = document.createElement('li');
    title.textContent = 'ALL CATEGORIES';
    title.id = 'title';
    myCategoryList.appendChild(title);
    categoryList()
        .then(categories => {
            categories.forEach(function (category) {
                const paragraph = document.createElement('p'); // создаем <p> для кажд элем списка
                paragraph.textContent = category.list_name;
                paragraph.classList.add('p-list');
                myCategoryList.appendChild(paragraph);
            });
        })
        .catch(error => {
            console.error('Error fetching data;', error);
        });
    loadBooksAllCat();
};

categoryBlock.addEventListener('click', async event => {
    event.preventDefault();
    if (event.target.tagName === 'P') {
        const selectedCategory = event.target.textContent;
        loadBooks(selectedCategory);
    } else if (event.target.id === 'title') {
        loadBooksAllCat();
        console.log(loadBooksAllCat());
    }
});