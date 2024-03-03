export const SHOPPING_LIST_KEY = 'list';

function toLocalStorage(key, value) {
  const values = JSON.stringify(value);
  localStorage.setItem(key, values);
}

function getLocalStorageItem(key) {
  const values = localStorage.getItem(key);
  try {
    return JSON.parse(values);
  } catch (error) {
    return console.log(error);
  }
}

function onAddToListClick(book) {
  const shoppingList = getLocalStorageItem();
  shoppingList.push(book);
  updateShoppingList(shoppingList);
  //Повідомлення iziToast
}

function updateShoppingList(book) {
  localStorage.setItem(SHOPPING_LIST_KEY, JSON.stringify(book));
}
