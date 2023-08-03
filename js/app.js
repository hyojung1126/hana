$(function () {
    // load menu
    $('.header_page').load('../inc/header_page.html')
    $('.footer_page').load('../inc/footer_page.html')

    // slick slider
    // $('.slide').slick({
    //     arrows: false,
    //     infinite: true,
    //     speed: 300,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     cssEase: 'linear'
    // });

    // $('.text_slide').slick({
    //     arrows: false,
    //     infinite: true,
    //     speed: 700,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     cssEase: 'linear',
    //     slidesToShow: 1
    // });


// Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        loopAdditionalSlides: 1,
		loopedSlides: 1,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
        pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });

// switer play_stop btns
    $('.xi-play').on('click',function(){
        swiper.autoplay.start();
        return false;
    })

    $('.xi-pause').on('click',function(){
        swiper.autoplay.stop();
        return false;
    })

    $('.play_btns i').click(function(){
        $('.xi-pause, .xi-play').toggleClass('active')
    })

})



