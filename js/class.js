// "use strict";
//
// console.log('hello world');
//
// console.log(parseInt('17 dogs'));
//
// var whatIsWord = prompt('favorite work word?');
//
// console.log(whatIsWord);
//
// // lets define function
//
// function doTheThing(input) {
//     var output = input + ' stringgggg';
//     return output;
// }
//
// console.log(doTheThing('hotdog'));
//
// function addStuff(x, y) {
//     return x + y;
// }
//
// console.log(addStuff(17, 18));
//
// // lets make a 'bad' function
//
// function logToConsole(info) {
//     return console.log(info + "info to keep in mind");
// }
//
// var needThisForLater = logToConsole('bengal tigers');
//
// console.log(needThisForLater);
//
// function addingToString(str) {
//     var finalString = str + "is a string";
// }

// alert('hello world');

// var slices = 8;
//
// while(slices > 0) {
//     console.log('i will have a slice');
//     slices = slices -1;
//     if (slices > 1) {
//         console.log('now there is ' + slices + ' slices left');
//     } else {
//         console.log('now there is ' + slices + ' slice left');
//     }
// }

// psuedocode
// ask user for input
// declare a user input variable and store input
// make variable to store the accumilating total
// add the cost of new items to that total



var custSpend = parseFloat(prompt('how much did you just spend'));

alert('the total amount you have spent so far is ' + custSpend);

var total = custSpend;
var input = '';
while(input !== "STOP") {
    input = prompt('how much did you just spend? enter STOP when you want to stop');
    if (input === "STOP") {
        alert('okay final total is ' + total);
    } else {
    custSpend = parseFloat(input);
    total = total + custSpend;
    alert('the total amount you have spent so far is ' + total.toFixed(2));
    }
}

var counter = 99;
while (counter >= 0) {
    console.log(counter);
    counter = counter -1;
}