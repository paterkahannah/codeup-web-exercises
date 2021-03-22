"use strict";

console.log('hello world');

console.log(parseInt('17 dogs'));

var whatIsWord = prompt('favorite work word?');

console.log(whatIsWord);

// lets define function

function doTheThing(input) {
    var output = input + ' stringgggg';
    return output;
}

console.log(doTheThing('hotdog'));

function addStuff(x, y) {
    return x + y;
}

console.log(addStuff(17, 18));

// lets make a 'bad' function

function logToConsole(info) {
    return console.log(info + "info to keep in mind");
}

var needThisForLater = logToConsole('bengal tigers');

console.log(needThisForLater);

function addingToString(str) {
    var finalString = str + "is a string";
}



