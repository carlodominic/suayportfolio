$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    /******************************/

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });

    /******************************/

    $('.1').click(function(){
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 500, 'swing');
    });

    $('.2').click(function(){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 500, 'swing');
    });

    $('.3').click(function(){
        $('html, body').animate({
            scrollTop: $("#services").offset().top
        }, 500, 'swing');
    });

    $('.4').click(function(){
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 500, 'swing');
    });

    $('.5').click(function(){
        $('html, body').animate({
            scrollTop: $("#teams").offset().top
        }, 500, 'swing');
    });

    $('.6').click(function(){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 500, 'swing');
    });

    /******************************/
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    /******************************/

    var typed = new Typed(".typing", {
        strings: ["IT Student", "Programmer", "Future Developer", "Future Data Analyst","Future Millionaire"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["IT Student", "Programmer", "Future Developer", "Future Data Analyst","Future Millionaire"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    /******************************/

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut:2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

});