"use strict";

// code to reveal second page
$(document).keyup(function(event) {
    console.log(event.keyCode);
});
const keySequence = [];
const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
    'Enter'
];
document.addEventListener('keyup', function(e) {
    keySequence.push(e.key);

    if (keySequence.join('') === konamiCode.join('')) {
        $('p').toggleClass('hide');
        $('h2').toggleClass('hide');
        $('body').toggleClass('animation-area');
        $('div').toggleClass('box-area');
        setTimeout(function(){  $('#one').toggleClass('hide'); }, 3000);
        setInterval(function(){  $('#two').toggleClass('hide'); }, 5000);
    }
});

// code to change boxes to white
const keySequence2 = [];
const konamiCode2 = [
    'ArrowLeft',
    'ArrowRight',
];
document.addEventListener('keyup', function (e) {
    keySequence2.push(e.key);
    keySequence2.splice(
        -konamiCode2.length - 1,
        keySequence2.length - konamiCode2.length
    );
    if (keySequence2.join('') === konamiCode2.join('')) {
        $('.box-area li').css('background', 'white');
    }
});

//  red and blue box colors
$('li').click(function() {
    $(this).css('background-color', 'orangered');
});
$('li').dblclick(function() {
    $(this).css('background-color', 'blue');
});
