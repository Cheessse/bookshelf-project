const slider = document.querySelector('#slider');
let themeStyle = document.querySelector('#theme-style');

const savedTheme = localStorage.getItem('theme');

if (!themeStyle) {
  themeStyle = document.createElement('link');
  themeStyle.id = 'theme-style';
  document.head.appendChild(themeStyle);
}

// Встановлюємо тему за замовчуванням або збережену тему
if (!savedTheme) {
  themeStyle.setAttribute('href', `./css/styles-light-theme.css`);
  // themeStyle.setAttribute('href', `./css/${savedTheme}.css`);
} else {
  themeStyle.setAttribute('href', `./css/${savedTheme}.css`);
  // themeStyle.setAttribute('href', `./css/styles-light-theme.css`);
}

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  themeStyle.setAttribute('href', `./css/${themeName}.css`);
}

function toggleTheme() {
  if (slider.checked) {
    setTheme('styles-light-theme');
  } else {
    setTheme('styles-dark-theme');
  }
}

slider.addEventListener('change', toggleTheme);

function checkTheme() {
  if (savedTheme === 'styles-dark-theme') {
    setTheme('styles-dark-theme');
    slider.checked = false;
  } else {
    setTheme('styles-light-theme');
    slider.checked = true;
  }
}

checkTheme();
