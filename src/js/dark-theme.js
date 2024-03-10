const slider = document.querySelector('#slider');
let themeStyle = document.querySelector('#theme-style');

const savedTheme = localStorage.getItem('theme');
const root = document.documentElement;

if (!themeStyle) {
  themeStyle = document.createElement('link');
  themeStyle.id = 'theme-style';
  document.head.appendChild(themeStyle);
}

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
}

function updateCssVariables(theme) {
  root.style.setProperty('--header-color', theme.headerColor);
  root.style.setProperty('--body-color', theme.bodyColor);
  root.style.setProperty('--font-color', theme.fontColor);
  root.style.setProperty('--header-border-color', theme.headerBorderColor);
  root.style.setProperty('--modal-body-color', theme.modalBodyColor);
  root.style.setProperty(
    '--all-categories-title-and-hover',
    theme.allCategoriesTitleAndHover
  );
  root.style.setProperty(
    '--all-categories-list-text',
    theme.allCategoriesListText
  );
  root.style.setProperty(
    '--all-categories-scroll-color',
    theme.allCategoriesScrollColor
  );
  root.style.setProperty(
    '--shopping-list-default-text',
    theme.shoppingListDefaultText
  );
}

function toggleTheme() {
  if (slider.checked) {
    setTheme('styles-dark-theme');
    updateCssVariables(darkTheme);
  } else {
    setTheme('styles-light-theme');
    updateCssVariables(lightTheme);
  }
}

slider.addEventListener('change', toggleTheme);

const lightTheme = {
  headerColor: '#fff',
  bodyColor: '#f6f6f6',
  fontColor: '#111',
  headerBorderColor: '#111',
  modalBodyColor: '#fff',
  allCategoriesTitleAndHover: '#4f2ee8',
  allCategoriesListText: 'rgba(17, 17, 17, 0.6)',
  allCategoriesScrollColor: '#e0e0e0',
  shoppingListDefaultText: 'rgba(0, 0, 0, 0.6)',
};

const darkTheme = {
  headerColor: '#111',
  bodyColor: '#202024',
  fontColor: '#ffffff',
  headerBorderColor: '#fff',
  modalBodyColor: '#202024',
  allCategoriesTitleAndHover: '#eac645',
  allCategoriesListText: 'rgba(255, 255, 255, 0.6)',
  allCategoriesScrollColor: 'rgba(17, 17, 17, 0.6)',
  shoppingListDefaultText: 'rgba(255, 255, 255, 0.6)',
};

function checkTheme() {
  if (savedTheme === 'styles-dark-theme') {
    setTheme('styles-dark-theme');
    updateCssVariables(darkTheme);
    slider.checked = true;
  } else {
    setTheme('styles-light-theme');
    updateCssVariables(lightTheme);
    slider.checked = false;
  }
}

checkTheme();
