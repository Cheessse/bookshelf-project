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
  // themeStyle.setAttribute('href', `./css/${themeName}.css`);
}

function updateCssVariables(theme) {
  root.style.setProperty('--header-color', theme.headerColor);
  root.style.setProperty('--body-color', theme.bodyColor);
  root.style.setProperty('--yellow', theme.yellow);
  root.style.setProperty('--violet', theme.violet);
  root.style.setProperty('--font-color', theme.fontColor);
  root.style.setProperty('--header-border-color', theme.headerBorderColor);
  root.style.setProperty('--modal-body-color', theme.modalBodyColor);
  root.style.setProperty(
    '--all-categories-title-and-hover',
    theme.allCategoriesTitleAndHover
  );
}

function toggleTheme() {
  if (slider.checked) {
    setTheme('styles-light-theme');
    updateCssVariables(lightTheme);
  } else {
    setTheme('styles-dark-theme');
    updateCssVariables(darkTheme);
  }
}

slider.addEventListener('change', toggleTheme);

const lightTheme = {
  headerColor: '#fff',
  bodyColor: '#f6f6f6',
  yellow: '#eac645',
  violet: '#4f2ee8',
  fontColor: '#111',
  headerBorderColor: '#111',
  modalBodyColor: '#fff',
  allCategoriesTitleAndHover: '#4f2ee8',
};

const darkTheme = {
  headerColor: '#111',
  bodyColor: '#202024',
  yellow: '#eac645',
  violet: '#4f2ee8',
  fontColor: '#ffffff',
  headerBorderColor: '#fff',
  modalBodyColor: '#202024',
  allCategoriesTitleAndHover: '#eac645',
};

function checkTheme() {
  if (savedTheme === 'styles-dark-theme') {
    setTheme('styles-dark-theme');
    updateCssVariables(darkTheme);
    slider.checked = false;
  } else {
    setTheme('styles-light-theme');
    updateCssVariables(lightTheme);
    slider.checked = true;
  }
}

checkTheme();
