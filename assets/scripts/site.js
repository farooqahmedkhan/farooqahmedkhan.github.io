$(document).ready(function(){
    $(window).scroll(function(event){
        if($(window).scrollTop() > 30){
            $('.nav-wrapper').addClass('z-depth-2');
        } else {
            $('.nav-wrapper').removeClass('z-depth-2');
        }
    });
});