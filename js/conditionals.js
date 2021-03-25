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

// function analyzeColor(color) {
//     if (color === 'blue') {
//         return 'blue is the color of the sky';
//     } else if (color === 'red') {
//         return 'Stawberries are red';
//     } else {
//         return 'I do not know anything about that color';
//     }
// }

//console.log(analyzeColor('blue'));
// console.log(analyzeColor('red'));
// console.log(analyzeColor('green'));

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

// function analyzeColor(randomColor) {
//     if (randomColor === 'blue') {
//         return 'blue is the color of the sky';
//     } else if (randomColor === 'red') {
//         return 'Stawberries are red';
//     } else {
//         return 'I do not know anything about that color';
//     }
// }

//console.log(analyzeColor(randomColor));

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

//console.log(analyzeColor(randomColor));

/**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */

//var userFavColor = prompt("What's your favorite color?").toLowerCase();

// function analyzeColor(userFavColor) {
//     if (userFavColor === 'blue') {
//         return 'blue is the color of the sky';
//     } else if (userFavColor === 'red') {
//         return 'Stawberries are red';
//     } else {
//         return 'I do not know anything about that color';
//     }
// }

//console.log(analyzeColor(userFavColor));

//alert(analyzeColor(userFavColor));

/* ########################################################################## */

// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//


//// getting Nan, fix this, make more ocnsole logs to test
// function calculateTotal(luckyNum, total) {
//     if (luckyNum === 1) {
//         return 'your total is ' + (total - (total * .1)).toFixed(2);
//     } else if (luckyNum === 2) {
//         return 'your total is ' + (total - (total * .25)).toFixed(2);
//     } else if (luckyNum === 3) {
//         return 'your total is ' + (total - (total * .35)).toFixed(2);
//     } else if (luckyNum === 4) {
//         return 'your total is ' + (total - (total * .50)).toFixed(2);
//     } else if (luckyNum === 5) {
//         return 'your total is ' + (total - (total * .100)).toFixed(2);
//     } else {
//     return 'it is free';
//     }
// }
//
// console.log(calculateTotal(1, 12));

// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
//Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// var askCust = parseFloat(prompt('What was your total bill?'));
//
// function calculateTotal(luckyNumber, askCust) {
//     return askCust - ((luckyNumber * .01) * askCust);
// }
//
// alert("You're lucky (or unlucky number) was " + luckyNumber + ". You're original bill was $" + askCust + ". You're new total is $" + calculateTotal(luckyNumber, askCust));
//
// console.log(calculateTotal(5, 1));

// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * if what the user enters is not a number, use an alert to tell them that, and
//  * do *not* display any of the above information.
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */
//
var custQ = confirm('Would you like to enter a number?');

var two = (custQ) ? prompt('Great! Please enter a number!') : false;

(parseInt(two) % 2 === 1 && custQ === true) ? alert('This is an odd number!') : false;

if (custQ && !isNaN(two)) {
    (parseInt(two) % 2 !== 0) ? alert('This is an odd number!') : alert("This is an even number");
    alert("Your number + 100 = " + (parseInt(two) + 100));
    (two > 0) ? alert('This is a positive number!') : alert('This is a negative number!');
    } else if (isNan(two) || two == '') {
        alert('this is not a number');
    } else {
        alert('okay bye');
}

// if (!isNaN(two)) {
//     (parseInt(two) % 2 !== 0) ? alert('This is an odd number!') : alert("This is an even number");
//     (two > 0) ? alert('This is a positive number!') : alert('This is a negative number!');
// }
// else {  alert('this is not a number');
// }
//
// function hate(two) {
//     return alert("Your number + 100 = " + (parseInt(two) + 100));
// }
//
// console.log(hate(two));
//
// // function experiment(two) {
// //     if (!isNaN(two)) {
// //         (parseInt(two) % 2 !== 0) ? alert('This is an odd number!') : alert("This is an even number");
// //         alert("Your number + 100 = " + (parseInt(two) + 100));
// //         (two > 0) ? alert('This is a positive number!') : alert('This is a negative number!');
// //     } else {
// //         alert('this is not a number');
// //     }
// // }
//
// //
// // if (isNaN(two)) {
// //     alert('this is not a number');
// // }
// //
// // // following two lines do not work work negative numbers
// // if (two % 2 !== 0 && custQ === true) {
// //         alert('this is an odd number');
// // }
// //
// // if (two % 2 !== 0 && custQ === true) {
// //     alert('this is an even number');
// // }
// //
// // if (custQ === true && !isNaN(two)) {
// //     alert("Your number + 100 = " + (parseInt(two) + 100));
// // }
// //
// // if (parseInt(two) > 0 && custQ === true) {
// //     alert('this is a positive number');
// // }
// //
// // if (parseInt(two) < 0 && custQ === true) {
// //     alert('this is a negative number');
// // }
// //
// //
//
//
// // if (parseInt(two) % 2 === 1 && custQ === true) {
// //     alert("Your number + 100 = " + (parseInt(two) + 100));
// // }
// //
// // if (parseInt(two) > 0 && custQ === true) {
// //     alert('this is a positive number');
// // } else {
// //     alert('this is a negative number');
// // }
//
//
//
//
//
//
//        // (parseInt(qTwo) % 2 === 1) ? alert('This is an odd number!') : alert("This is an even number");
//
//
//         //(qTwo > 0) ? alert('This is a positive number!') : alert('This is a negative number!');
//
//
//
//
// // switch(!isNaN(qTwo)) {
// //     case (qTwo % 2 === 1):
// //         alert('This is an odd number!');
// //     case (qTwo % 2 === 0):
// //         alert("This is an even number");
// //     case (qTwo !== NaN):
// //     alert("Your number + 100 = " + (parseInt(qTwo) + 100));
// //         ;
// //     case (qTwo > 0):
// //         alert('This is a positive number!');
// //     case (qTwo < 0):
// //         alert('This is a negative number!');
// //     default:
// //         alert('this is not a number');
// // }