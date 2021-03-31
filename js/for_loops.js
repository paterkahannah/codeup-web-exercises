'use strict';

function showMultiplicationTable() {
    for (var i = 7, j = 1; j <= 10; i += 7, j++) {
        console.log(7 + " x " + j + ' = ' + i);
    }
}

showMultiplicationTable(7);

console.log('-------------------')

for (var i = 1; i <= 10; i++) {
    var randomNum = Math.floor(Math.random() * 200) + 20;
    randomNum % 2 === 0 ? console.log(randomNum + ' is even') : console.log(randomNum + ' is odd');
}

console.log('-------------------')

var num = '';

for (var i = 1; i <= 9; i++) {
    for (var j = 1 ; j <= i; j++) {
        num += i + '';
    }
    console.log(num);
    num = '';
}

console.log('-------------------')

for (var i = 100; i > 0; i -= 5) {
    console.log(i);
}