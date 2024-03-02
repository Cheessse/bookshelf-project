import { booksApi } from './home-books';
import { loadBooks } from './home-books';

window.onload = function () {
    const categoryList = document.getElementById("category-list");
    const title = document.createElement('li');
    title.textContent = "ALL CATEGORIES";
    title.id = "title";
    categoryList.appendChild(title);
    booksApi().then(categories => {
        categories.forEach(function (category) {
            const paragraph = document.createElement('p');
            paragraph.textContent = category.list_name;
            paragraph.id = "p-list";
            categoryList.appendChild(paragraph);
        });
    }).catch(error => {
        console.error('Error fetching data;', error);
    });
    paragraph.addEventListener('click', loadBooks);
};