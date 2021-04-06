"use strict";

// prompts user for a number between 1-50
var userNum = prompt('Please enter an odd number between 1-50.');

// function verifies number is between 1-50 and positive
function check(num) {
    return num >= 1 && num <= 50 && num % 2 !== 0;
}

// this loop repeats the prompt until user enters a number that satisifies the requirements
while (true) {
    if (check(userNum)) {
        break;
    }
    userNum = prompt("I'm sorry, please enter an odd number between 1 and 50.");
}

// this loop outputs all odd numbers between 1-50, skipping the even numbers, and outputting a special line for the number the customer entered
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