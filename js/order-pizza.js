$('.next').click(function(){
    $('.nav-tabs > .active').next('a').trigger('click');
});

$('.previous').click(function(){
    $('.nav-tabs > .active').prev('a').trigger('click');
});