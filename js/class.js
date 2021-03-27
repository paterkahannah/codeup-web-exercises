"use strict";

// console.log(parseInt("17 hot dogs"));
// console.log("17 hot dogs");
//
// var whatIsWord = prompt("What's your favorite work word?");
//
// console.log(whatIsWord + " is her favorite work word ;) ");

function doTheThing(input) {
    return input + " made into a string";
}

console.log(doTheThing(true));

function addStuff(x, y) {
    return x + y;
}

console.log(addStuff(17, 18));

console.log("I have 8 pizzah slices, I love pizzah");

var slices = 8;

while(slices > 0) {
    console.log('I will have a pizzah slice');
    slices = slices -1;
    if (slices > 1) {
        console.log('now there is ' + slices + ' pizzah slices left');
    } else {
        console.log('now there are no pizzah slices left');
    }
}

// pseudo code.... use it

var custSpent = parseFloat(prompt('How much money did you spend at Amazon this week?')).toFixed(2);

alert('Your total so far is $' + custSpent);

var total = ' $' + parseFloat(custSpent);
var input = '';
while(input !== "no") {
    input = prompt("How much more did you just spend? Enter no when you want to stop.");
    if (input === "NO") {
        alert("Okay, fine");
    } else {
    total += custSpent;
    alert("The total amount you have spent so far is " + total);
    }
}

var counter = 99;
while (counter >= 0) {
    console.log(counter);
    counter = counter -1;
}