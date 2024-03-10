import { categoryList } from '../books API/books-api';
import { loadBooks } from './home-books';
import { loadBooksAllCat } from './home-books';

const categoryBlock = document.querySelector('#category-list');
let category;
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
            // смена стиля при hover на '.p-list'
            let pListElements = document.querySelectorAll('.p-list');
            let titleElement = document.querySelector('#title');
            pListElements.forEach((pElement) => {
                pElement.addEventListener('mouseover', function () {
                    titleElement.style.fontWeight = '400';
                    titleElement.style.fontSize = '16px';
                    titleElement.style.lineHeight = '112%';
                    titleElement.style.letterSpacing = '-0.02em';
                    titleElement.style.color = 'var(--all-categories-list-text)';
                });
                //Возврат #title к исходным значениям
                pElement.addEventListener('mouseout', function () {
                    titleElement.style.fontWeight = '700';
                    titleElement.style.fontSize = '18px';
                    titleElement.style.lineHeight = '133%';
                    titleElement.style.letterSpacing = '-0.02em';
                    titleElement.style.color = 'var(--all-categories-title-and-hover)';
                });
            });
        })
        .catch(error => {
            console.error('Error fetching data;', error);
        });
    loadBooksAllCat(category);

};

categoryBlock.addEventListener('click', async event => {
    event.preventDefault();
    if (event.target.tagName === 'P') {
        const selectedCategory = event.target.textContent;
        loadBooks(selectedCategory);
    } else if (event.target.id === 'title') {
        loadBooksAllCat(category);
    }
});