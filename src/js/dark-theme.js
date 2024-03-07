const slider = document.querySelector('#slider');
const themeStyle = document.querySelector('#theme-style');

let savedTheme = localStorage.getItem('theme');

// Встановлюємо тему за замовчуванням або збережену тему
if (savedTheme) {
  themeStyle.setAttribute('href', `./css/${savedTheme}.css`);
}

// function to set the theme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  themeStyle.setAttribute('href', `./css/${themeName}.css`);
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (slider.checked) {
    setTheme('styles-light-theme');
  } else {
    setTheme('styles-dark-theme');
  }
}

slider.addEventListener('change', toggleTheme);

// Immediately invoked function to set the theme on initial load
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
