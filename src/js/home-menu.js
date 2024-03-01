import axios from 'axios';

document.addEventListener("DOMContentLoaded", function () {
    const categoryList = document.getElementById("category-list"); //сылка на список категорий
    const categories = api(); //тут наверное api для категорий
    // заполняем/проходим по категориям
    categories.forEach(function (category) {
        const li = document.createElement('li'); // создаем 'li'
        li.textContent = category.list_name; // задаем текст категории
        categoryList.appendChild(li); // добавляем елемент в список
    });
});