"use strict";

var counter = 2;
while (counter <= 65536) {
    console.log(counter);
    counter = counter * 2;
}

console.log('-----------------------')

var allCones = Math.floor(Math.random() * 50) + 50;

console.log('I have ' + allCones + ' cones to sell');
do {
    var sold = Math.floor(Math.random() * 5) + 1;
    if (allCones >= sold) {
        allCones = allCones - sold;
        console.log('I sold ' + sold + ' cones, I have ' + allCones + ' left');
    } else {
        console.log('I cannot sell you ' + sold + ' I only have ' + allCones + ' left');
    }
} while (allCones > 0);
console.log('Yay, I sold them all!');