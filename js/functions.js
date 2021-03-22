"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return 'Hello ' + name;
}

console.log(sayHello('Hannah!'));

alert(sayHello('Hannah!'))
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello('Hannah');

console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = 'Hannah';
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(random) {
    if (random === 2) {
        return true;
    } else {
        return false;
    }
}

console.log(isTwo(random));

// alternatives
//function isTwo(random) {
  //  random === 2;
//}

// instructor code, return and study

// function isTwo(num) {
//    return num === 2;
// }
// console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip (x, y) {
    return x * y;
}

console.log(calculateTip(0.30, 45));


// more instructor code
// var calculateTip = function(tip, bill) {
//     return tip * bill;
// }
//
// var tip1 = calculateTip(.20, 20)
//
// console.log("your tip is " + tip1.toFixed(2));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

var total = prompt('What was the total of your bill?');
var tip = prompt('What percentage would you like to tip?');
alert('The tip total is $' + (calculateTip(total, tip*0.01)))
/// add two fixed, split last line ?

/// instructor code
// var bill = parseFloat(prompt('$$ man'));
// var tipPercentage = parseFloat(prompt('tip?'));
//
// var tipAmount = calculateTip(tipPercentage, bill);
// var total = bill + tipAmount;
//
// alert('words' + bill.toFixed(2) + 'more words' + (tipPercentage + 100) "words" + tipAmount.toFixed(2) + 'words' + total.toFixed(2))


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */


/// this code faulty x and y

function applyDiscount (x, y) {
    return x * y;
}
var apply = confirm("You're total is $40, would you like to apply 25% discount?")
if (apply === true) {
    alert("You're discounted total is $" + (applyDiscount(50, .25)))
    console.log(applyDiscount(50, .25));
}

//function isTwo(random) {
//  random === 2;