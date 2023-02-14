$(function (){
    
    $('.menu-opener, .menu-closer').on('click',function(e){
        e.preventDefault();
        $('header .navbar').toggleClass('active');
        $('header').toggleClass('active');
    });

    var btn = $('#scroll-top');

    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });

});

