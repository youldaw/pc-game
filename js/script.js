$(function (){
    
    $('.cart-btn').on('click',function(e){
        e.preventDefault();
        $('.head-drop').toggleClass('active');
    });

    $('.filter-btn').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.catalog-sec').toggleClass('active');
    });

    $(document).mouseup(function (e){
        var div = $(".head-drop");
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) {
            div.removeClass('active');
        }
    });

    var btn = $('#scroll-top');

    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });
    

});

