// import Pagination from 'tui-pagination';

// function displayShoppingList(pageNumber, itemsPerPage) {
//     if (!localStorage.getItem('shoppingList')) {
//         console.error('Список покупок не знайдено в локальному сховищі.');
//         return;
//     }

//     const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
//     const startIndex = (pageNumber - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const currentPageItems = shoppingList.slice(startIndex, endIndex);

//     document.getElementById('shopping-list').innerHTML = currentPageItems.join('<br>');
// }

// const itemsPerPage = 3;
// const shoppingListData = localStorage.getItem('shoppingList');
// const totalItems = shoppingListData ? JSON.parse(shoppingListData).length : 0;

// const pagination = new Pagination(document.getElementById('pagination'), {
//     totalItems: totalItems,
//     itemsPerPage: itemsPerPage,
//     visiblePages: 5,
//     centerAlign: true
// });

// pagination.on('beforeMove', function (eventData) {
//     displayShoppingList(eventData.page, itemsPerPage);
// });

// displayShoppingList(1, itemsPerPage);
