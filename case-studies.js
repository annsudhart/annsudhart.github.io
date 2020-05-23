$(document).ready(function() {
    $('.hamburger').click(function() {
        $('#links').slideToggle(300);
        $('.top').toggleClass('rotate');
        $('.middle').toggleClass('rotate-back');
        $('.bottom').toggleClass('ham-hidden');
    });

    $('#internal-link li a').not('.hamburger').click(function() {
        var target = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(target).offset().top - 60
        }, 800);
    });

    imgList = [
        './images/tweets-per-bill-1.png',
        './images/tweets-per-bill-2.png',
        './images/tweets-per-bill-3.png',
        './images/tweets-per-bill-4.png',
        './images/tweets-per-bill-5.png',
        './images/tweets-per-bill-6.png',
        './images/tweets-per-bill-7.png',
        './images/tweets-per-bill-8.png'
    ]

    /* $('.carousel .arrow').click(function() {
        carouselIndex -= 1;
        $('.carousel img').attr('src', imgList[(carouselIndex + imgList.length) % imgList.length]);
        console.log(carouselIndex);
    });
    
    $('.carousel .arrow').click(function() {
        carouselIndex += 1;
        $('.carousel img').attr('src', imgList[(carouselIndex + imgList.length) % imgList.length]);
        console.log(carouselIndex);
    });*/ 

});

let carouselIndex = 0;

function flipLeft() {
    carouselIndex = (carouselIndex - 1 + imgList.length) % imgList.length;
    $('.carousel img').attr('src', imgList[carouselIndex]);
    console.log(carouselIndex);
}

function flipRight () {
    carouselIndex = (carouselIndex + 1 + imgList.length) % imgList.length;;
    $('.carousel img').attr('src', imgList[carouselIndex]);
    console.log(carouselIndex);
}