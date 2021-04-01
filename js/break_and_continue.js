"use strict";

var userNum = prompt('enter an odd number between 1-50');

function check(num) {
    return num >= 1 && num <= 50 && num % 2 !== 0;
}

while (true) {
    if (check(userNum)) {
        break;
    }
    userNum = parseInt(prompt("Give me an odd number between 1 and 50 please?"));
}

for (var i = 1; i <= 49; i++) {
    if (i % 2 === 0) {
        continue;
    } else if (i == userNum) {
        console.log('Yikes! Skipping number ' + i);
        continue;
    } else (i % 2 !== 0);
    {
        console.log('Here is an odd number ' + i)
    }
}