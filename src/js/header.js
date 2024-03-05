(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const menuIcon = document.querySelector('.header-menu-icon');

  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');
    mobileMenu.classList.toggle('is-open');
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

    if (isMenuOpen) {
      menuIcon.querySelector('use').setAttribute('href', './img/symbol-defs.svg#icon-burger');
    } else {
      menuIcon.querySelector('use').setAttribute('href', './img/symbol-defs.svg#icon-x');
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
})();