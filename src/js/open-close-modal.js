export function openAndCloseModal() {
    const backdrop = document.querySelector('.about-book-backdrop');
    backdrop.classList.add('is-active');
    document.body.classList.add('no-scroll');

    backdrop.addEventListener('click', closeModalByClicking);
    document.body.addEventListener('keyup', closeModalByKey);
}

function closeModalByClicking(e) {
    const backdrop = document.querySelector('.about-book-backdrop');
    const modalWindow = document.querySelector('.about-book-window');
    const closeBtn = document.querySelector('.about-book-close-btn');
    const isCloseBtnClicked = e.target.closest('[data-modal-close]') === closeBtn;

    if (!modalWindow.contains(e.target) || isCloseBtnClicked) {
        backdrop.classList.remove('is-active');
        document.body.classList.remove('no-scroll');

        backdrop.removeEventListener('click', closeModalByClicking);
        document.body.removeEventListener('keyup', closeModalByKey);
    }
}

function closeModalByKey(e) {
    const backdrop = document.querySelector('.about-book-backdrop');
    const key = e.key || e.keyCode;

    if (key === 'Escape' || key === 'Esc') {
        backdrop.classList.remove('is-active');
        document.body.classList.remove('no-scroll');

        backdrop.removeEventListener('click', closeModalByClicking);
        document.body.removeEventListener('keyup', closeModalByKey);
    }
}

