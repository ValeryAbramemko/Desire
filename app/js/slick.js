$('.single-item').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
});
$('.contact-slider').slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1700,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 8,
            }
        },
        {
            breakpoint: 1511,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
            }
        },
        {
            breakpoint: 1201,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 841,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 551,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 376,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});



$('.article-slider__box').slick({
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__left"><img src="./images/arrow_left-1.png" alt=""></button>',
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__right"><img src="./images/arrow_right-1.png" alt=""></button>'
});