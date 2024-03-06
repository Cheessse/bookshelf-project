const SHOPPING_LIST_KEY = 'list';

function addToShoppingList(book) {
  const shopList = getAllBooks();
  shopList.push(book);
  localStorage.setItem(SHOPPING_LIST_KEY, JSON.stringify(shopList));
}

function getAllBooks() {
  return JSON.parse(localStorage.getItem(SHOPPING_LIST_KEY)) || [];
}

export const localStorageAPI = {
  SHOPPING_LIST_KEY,
  addToShoppingList,
  getAllBooks,
};
