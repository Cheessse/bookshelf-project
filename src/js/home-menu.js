// import { booksApi } from './home-books';
import { loadBooks } from './home-books';
window.onload = function () {
    const categoryList = document.getElementById("category-list"); //сылка на список категорий
    const title = document.createElement('li');
    title.textContent = "ALL CATEGORIES";
    title.id = "title";
    categoryList.appendChild(title);
    booksApi().then(categories => { // Вызываем функцию booksApi, которая возвращает промис с категориями
        categories.forEach(function (category) { // Проходимся по каждой категории
            const paragraph = document.createElement('p'); // создаем <p> для кажд элем списка
            paragraph.textContent = category.list_name;
            paragraph.id = "p-list";

            paragraph.addEventListener('click', function () {
                loadBooks(category.list_name); //Вызываем функцию loadBooks при клике на элемент
            });
            categoryList.appendChild(paragraph); // Добавляем элемент в список внутри цикла
        });
    }).catch(error => {
        console.error('Error fetching data;', error);
    });
};