
import { categoryList } from '../books API/books-api';
import { loadBooks } from './home-books';

window.onload = function () {
    const myCategoryList = document.getElementById("category-list");
    const title = document.createElement('li');
    title.textContent = "ALL CATEGORIES";
    title.id = "title";
    myCategoryList.appendChild(title);
    categoryList().then(categories => {
        categories.forEach(function (category) {
            const paragraph = document.createElement('p');
            paragraph.textContent = category.list_name;
            paragraph.id = "p-list";
            myCategoryList.appendChild(paragraph);
        });
    }).catch(error => {
        console.error('Error fetching data;', error);
    });
    paragraph.addEventListener('click', loadBooks);
};