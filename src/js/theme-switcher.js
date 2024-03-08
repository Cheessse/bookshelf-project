export const lightTheme = {
  headerColor: '#fff',
  bodyColor: '#e0e0e0',
  yellow: '#eac645',
  violet: '#4f2ee8',
  fontColor: '#111',
  allCategoriesTitleAndHover: '#4f2ee8',
};

export const darkTheme = {
  headerColor: '#111',
  bodyColor: '#202024',
  yellow: '#eac645',
  violet: '#4f2ee8',
  fontColor: '#ffffff',
  allCategoriesTitleAndHover: '#eac645',
};

export function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document
    .getElementById('theme-style')
    .setAttribute('href', `/src/css/${themeName}.css`);
}

export function updateCssVariables(theme) {
  Object.entries(theme).forEach(([property, value]) => {
    document.documentElement.style.setProperty(`--${property}`, value);
  });
}
