import { booksApi } from './render';
//import { loadBooks } from './render';// Внести в проект
document.addEventListener("DOMContentLoaded", function () {
    const categoryList = document.getElementById("category-list");

    const title = document.createElement('li');  // Создаем новый элемент 'li' для заголовка
    title.textContent = "ALL CATEGORIES";
    title.id = "title"; // присваиваем "title" свой id
    categoryList.appendChild(title); // Добавляем заголовок в начало списка категорий

    booksApi().then(categories => {
        categories.forEach(function (category) {
            const paragraph = document.createElement('p');
            paragraph.textContent = category.list_name;
            paragraph.id = "p-list";

            paragraph.addEventListener('click', function () {
                document.getElementById('container').innerHTML = '';
                booksApibyCategory(category.list_name).then(books => {
                    books.forEach(book => {
                        const bookElement = document.createElement('div');
                        bookElement.textContent = book.title;
                        document.getElementById('container').appendChild(bookElement);
                    });
                });
            });

            categoryList.appendChild(paragraph); // Добавляем элемент в список внутри цикла
        });
    }).catch(error => {
        console.error('Error fetching data;', error);
    });
});