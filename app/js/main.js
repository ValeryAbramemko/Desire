
let menuBtn = document.querySelector('.header__btn');
let menu = document.querySelector('.rightside-menu');
let cliseC = document.querySelector('.rightside-menu__close ');

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
});

cliseC.addEventListener('click', function () {
    menu.classList.toggle('active');
});

let menuBtnMenu = document.querySelector('.header__btn-menu');
let menuS = document.querySelectorAll('.menu');

menuBtnMenu.addEventListener("click", function (event) {
    event.preventDefault();
    for (var i = 0; i < menuS.length; i++) {
        menuS[i].classList.toggle("menu--open");
    }
});











var mixer = mixitup('.gallery__inner', {
    load: {
        filter: '.living'
    }
});


$(function () {
    if ($(window).width() < 651) {
        $('.works-path__item--measurements').appendTo($('.works-path__items-box'));
    }
});
