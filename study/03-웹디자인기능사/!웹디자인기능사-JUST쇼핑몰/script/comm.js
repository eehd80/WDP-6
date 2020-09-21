$(function(){

    // nav
    let $navD1 = $('.nav-d1 > li > a'),
        $navD1list = $('.nav-d1 > li '),
        $navD2 = $('.nav-d2')

    $navD1.on('click', function(){
        $navD1list.removeClass('on');
        $(this).parent('li').addClass('on');
    })
    


        



})