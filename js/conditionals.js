"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    if (color === 'blue') {
        return 'blue is the color of the sky';
    } else if (color === 'red') {
        return 'Stawberries are red';
    } else {
        return 'I do not know anything about that color';
    }
}

console.log(analyzeColor('blue'));
console.log(analyzeColor('red'));
console.log(analyzeColor('green'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(color) {
    switch (color) {
        case 'blue':
            return 'blue is the color of the sky';
            break;
        case 'red':
            return 'Strawberries are red';
            break;
        default:
            return 'I do not know anything about that color';
    }
}

console.log(analyzeColor(randomColor));

/**
 //  * TODO:
 //  * Prompt the user for a color when the page loads, and pass the input from the
 //  * user to your `analyzeColor` function. Alert the return value from your
 //  * function to show it to the user.
 //  */

var userFavColor = prompt("What's your favorite color?").toLowerCase();

alert(analyzeColor(userFavColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNum, total) {
//     if (luckyNum === 1) {
//         return 'your new total is $' + (total - (total * .1)).toFixed(2);
//     } else if (luckyNum === 2) {
//         return 'your new total is $' + (total - (total * .25)).toFixed(2);
//     } else if (luckyNum === 3) {
//         return 'your new total is $' + (total - (total * .35)).toFixed(2);
//     } else if (luckyNum === 4) {
//         return 'your new total is $' + (total - (total * .50)).toFixed(2);
//     } else if (luckyNum === 5) {
//         return 'your new total is $' + (total - (total * .100)).toFixed(2);
//     } else {
//         return 'it is free';
//     }
// }

// this is a shorter version of hte baove block
function calculateTotal(luckyNum, total) {
    if (luckyNum === 1) return 'your new total is $' + (total - (total * .1)).toFixed(2);
    if (luckyNum === 2) return 'your new total is $' + (total - (total * .25)).toFixed(2);
    if (luckyNum === 3) return 'your new total is $' + (total - (total * .35)).toFixed(2);
    if (luckyNum === 4) return 'your new total is $' + (total - (total * .50)).toFixed(2);
    if (luckyNum === 5) return 'your new total is $' + (total - (total * .100)).toFixed(2);
    return 'it is free';
}

console.log(calculateTotal(1, 12));
console.log(calculateTotal(2, 12));
console.log(calculateTotal(3, 12));
console.log(calculateTotal(4, 12));
console.log(calculateTotal(5, 12));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

var luckyNumber = Math.floor(Math.random() * 6);

var askCust = parseFloat(prompt('What was your total bill?'));

alert("You're lucky (or unlucky number) was " + luckyNumber + ". You're original bill was $" + askCust.toFixed(2) + ", " + calculateTotal(luckyNumber, askCust));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var ask = confirm('Would you like to enter a number?');

var response = ask ? parseFloat(prompt('Please enter a number!')) : false;

// if (!isNaN(response)) {
//     response % 2 === 0 ? alert('This is an even number') : alert('This is an odd number');
// // i dont understand why adding 100 is outputting wrong
//     alert("Your number + 100 is " + parseFloat(response) + 100);
//     response > 0 ? alert('This number is positive') : alert('This number is negative');
// } else {
//     alert('this is not a number')
// }

// below is alternative code to the commented block above, does the same thing, but written differently
function oddOrEven(response) {
    return response % 2 === 0 ? 'This is an even number' : 'This is an odd number';
}

function plus100(response) {
    return 'This number + 100 equals to ' + (parseFloat(response) + 100);
}

function positiveOrNegative(response) {
    if (response > 0) {
        return 'This number is positive.';
    } else {
        return 'This number is negative.';
    }
}

if (!isNaN(response)) {
    alert(oddOrEven(response));
    alert(plus100(response));
    alert(positiveOrNegative(response));
} else {
    alert('That is not a number')
}