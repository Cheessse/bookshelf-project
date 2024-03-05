import Swiper from 'swiper';
import 'swiper/css'
import { support } from '../js/support';

const swiperOptions = {
    direction: 'vertical',
    navigation: {
        nextEl: '.swiper-btn-next'
    },
     
    rewind: true,
    allowTouchMove: false,
    spaceBetween: 20,
    slidesPerView: 'auto',
    slidesPerGroup: 6,
};

const swiper = new Swiper('.swiper', swiperOptions);

const refs = {
    nextBtn: document.querySelector('.swiper-btn-next'),
    list: document.querySelector('.swiper-wrapper'),
    btn: document.querySelector('.support-btn'),
};

const markup = support
    .map(
        (el, index) =>
            `<div class ="support-item swiper-slide">
                <span class="support-number">
                    ${(index + 1).toString().padStart(2, '0')}
                </span>
                <a href = "${el.url}" title = "${el.title}" target='_blank' rel="noopener noreferrer nofollow" aria-label="Link to support fond">
                <img src = "${el.img}" class="support-img" srcset="${el.img} 1x, ${el.img2x} 2x" alt = "${el.title} logo"/>
                </a>
            </div>`
    )
    .join('');

refs.list.innerHTML = markup;

toggleBtn();

addEventListener('resize', toggleBtn);

function onBtnClick() {
    swiper.slideNext();
    if (swiper.isBeginning || swiper.isEnd) {
        rotateBtn();
    }
}

function toggleBtn() {
    const isHidden = refs.btn.classList.contains('hidden');
    if (support.length > swiper.params.slidesPerGroup) {
        if (isHidden) {
            refs.btn.classList.remove('hidden');
        }
        refs.nextBtn.addEventListener('click', onBtnClick);
    } else {
        if (!isHidden) {
            refs.btn.classList.add('hidden');
        }
    }
}

function rotateBtn() {
    refs.btn.classList.toggle('support-btn-up')
}

