import Pagination from 'tui-pagination';

function displayShoppingList(pageNumber, itemsPerPage) {
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageItems = shoppingList.slice(startIndex, endIndex);
    
    document.getElementById('shopping-list').innerHTML = currentPageItems.join('<br>');
}

const itemsPerPage = 3;

const pagination = new Pagination(document.getElementById('pagination'), {
    totalItems: JSON.parse(localStorage.getItem('shoppingList')).length,
    itemsPerPage: itemsPerPage,
    visiblePages: 5,
    centerAlign: true
});

pagination.on('beforeMove', function (eventData) {
    displayShoppingList(eventData.page, itemsPerPage);
});

displayShoppingList(1, itemsPerPage);
