const swiper = new Swiper('.img-slider', {
  direction: 'horizontal',
  speed: 400,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  autoHeight: false,
  slidesPerView : 6,
  spaceBetween: 25,
  slidesPerGroup: 2,
  centeredSlides: false,
  grid: {
    fill: 'row',
    rows: 2,
  },
  freeMode: false,
  effect: 'slide',
  breakpoints: {
    1060: {
      slidesPerView: 5,
      grid: {
        fill: 'row',
        rows: 2,
      },
    },
    871: {
      slidesPerView: 4,
      grid: {
        fill: 'row',
        rows: 2,
      },
    },
    640: {
      spaceBetween: 20,
      slidesPerView: 3,
      grid: {
        fill: 'row',
        rows: 2,
      },
    },
    400: {
      centeredSlides: true,
      slidesPerView: 3,
      grid: {
        fill: 'row',
        rows: 1,
      },
      slidesPerGroup: 1,
    },
    300: {
      slidesPerView: 3,
      grid: {
        fill: 'row',
        rows: 1,
      },
      slidesPerGroup: 1,
    },
  },
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
});

//scroll: header fixed
const header = document.querySelector('.header');
window.addEventListener('scroll', function(event) {
  if (scrollY >=20) {
    header.classList.add('header--fixed');
  }
  else {
    header.classList.remove('header--fixed');
  };
})

//menu-burger
const menuBurger = document.querySelector('.header__menu');
document.addEventListener("click", function (event) {
	if (event.target.closest('.header__menu-btn')) {
		menuBurger.classList.toggle('header__menu--active');
	}
	if (!event.target.closest('.header__menu-btn')) {
		menuBurger.classList.remove('header__menu--active');
	}
});
document.addEventListener('keyup', function (event) {
	if (event.code === 'Escape') {
		menuBurger.classList.remove('header__menu--active');
	}
});

//modal window for item in slider

$(document).on('click', '[data-toggle="modal"]', function () {
  var target = $(this).attr('data-target');
  $(target).addClass('modal--show');
  return false;
});
$('.modal--close').on('click', function () {
  $(this).closest('.modal').removeClass('modal--show');
  return false;
});

//slider default - event on a download page
window.addEventListener("load", function() {
  sliderFruits.style.display = "block";
  sliderBerries.style.display = "none";
  sliderVegetables.style.display = "none";
  btnFruits.style.background = 'orange';
});


var slider=document.querySelector('.slider');
var btn=document.querySelector('.catalog__btn');
var sliderFruits=document.querySelector('.img-slider__fruits');
var sliderBerries=document.querySelector('.img-slider__berries');
var sliderVegetables=document.querySelector('.img-slider__veg');
var btnFruits=document.querySelector('.catalog__btn--fruits');
var btnBerries=document.querySelector('.catalog__btn--berries');
var btnVegetables=document.querySelector('.catalog__btn--vegetables');

function toggleSlider() {
  btnFruits.onclick = function() {
    sliderFruits.style.display = "block";
    sliderBerries.style.display = "none";
    sliderVegetables.style.display = "none";
    btnFruits.style.background = 'orange';
    btnBerries.style.background = 'transparent';
    btnVegetables.style.background = 'transparent';
  };

  btnBerries.onclick = function() {
    sliderFruits.style.display = "none";
    sliderBerries.style.display = "block";
    sliderVegetables.style.display = "none";
    btnFruits.style.background = 'transparent';
    btnBerries.style.background = 'orange';
    btnVegetables.style.background = 'transparent';
  };

  btnVegetables.onclick = function() {
    sliderFruits.style.display = "none";
    sliderBerries.style.display = "none";
    sliderVegetables.style.display = "block";
    btnFruits.style.background = 'transparent';
    btnBerries.style.background = 'transparent';
    btnVegetables.style.background = 'orange';
  };
}
