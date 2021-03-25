"use strict";

// Make a function named isOdd(number)
function isOdd(x) {
    return x % 2 !== 0;
}

console.log(isOdd(1));

// Make a function named isEven(number)
function isEven(x) {
    return x % 2 === 0;
}

console.log(isEven(2));

// Make a function named identity(input) that returns the input exactly as provided.
function identityInput(x) {
    return x;
}

console.log(identityInput('returning exact input provided'));

//     Make a function named isFive(input)
function isFive(x) {
    return x === 5;
}

console.log(isFive(5));

// Make a function named addFive(input) that adds five to some input.
function addFive(x) {
    return x + 5;
}

console.log(addFive(5));

// Make a function named isMultipleOfFive(input)
function isMultipleOfFive(x) {
    return x % 5 === 0;
}

console.log(isMultipleOfFive(5));

// Make a function named isThree(input)
function isThree(x) {
    return x === 3;
}

console.log(isThree(3));

// Make a function named isMultipleOfThree(input)
function isMultipleOfThree(x) {
    return x % 3 === 0;
}

console.log(isMultipleOfThree(9));

// Make a function named isMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(x) {
    return x % 3 === 0 && x % 5 === 0;
}

console.log(isMultipleOfThreeAndFive(15));

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(x, y) {
    return x % y === 0;
}

console.log(isMultipleOf(15, 5));

// Make a function named isTrue(boolean)
function isTrue(x) {
    return true === true;
}

console.log(isTrue(true));

// Make a function named isFalse(boolean)
function isFalse(x) {
    return false === false;
}

console.log(isFalse(false));

// Make a function named isTruthy(input), remember that values other than true will behave like true

function isTruthy(x) {
    return x == true;
}

console.log(isTruthy(1));

// Make a function named isFalsy(input), remember that values other than false behave like false
function isFalsy(x) {
    return x == false;
}

console.log(isFalsy(0));

// Make a function named isVowel(letter)
function isVowel(x) {
    x = x.toLowerCase();
    return x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u';
}

console.log(isVowel('A'));

// Make a function named isConsonant(letter)
function isConsonant(x) {
    return x !== 'a' || x !== 'e' || x !== 'i' || x !== 'o' || x !== 'u';

}

console.log(isConsonant('z'));

// Make a function named isCapital(letter)
function isCapital(x) {
    return x !== x.toLowerCase();
}

console.log(isCapital('A'));

// Make a function named isLowerCase(letter)
function isLowerCase(x) {
    return x !== x.toUpperCase();
}

console.log(isLowerCase('a'));

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
function hasLowerCase(x) {
    return x === x.toLowerCase();
}

console.log(hasLowerCase('run'));

// // Make a function named isSpace(letter) that returns if a character is a space character
// function isSpace(x) {
//     return x === '';
// }

console.log(hasLowerCase(' 1'));

// Make a function named isZero(number)
function isZero(x) {
    return x === 0;
}

console.log(isZero(0));
// // Make a function named notZero(input) that returns true if the input is not zero
// function notZero(x) {
//     return x !== 0;
// }

console.log(isZero(2));
// // Write a function named lowerCase(string)
// Write a function named double(n) that returns a number times two
function double(x) {
    return x * 2
}

console.log(double(2));
// Write a function named triple(n) that returns a number times 3
function triple(x) {
    return x * 3;
}

console.log(triple(3));
// Write a function named quadruple(n) that returns a number times 4
function qualruple(x) {
    return x * 4;
}

console.log(qualruple(4));
// Write a function named half(n) that returns 1/2 of the provided input
function half(x) {
    return x / 2;
}

console.log(half(2));
// Write a function named subtract(a, b) that returns a minus b
function subtract(x, y) {
    return x - y;
}

console.log(subtract(2, 1));
// Write a function named multiply(a, b) that returns the product of a times b
function multiply(x, y) {
    return x * y;
}

console.log(multiply(1, 1));
// Write a function named divide(a, b) that returns a divided by b
function divide(a, b) {
    return a / b;
}

console.log(multiply(1, 1));

//// function remainder(a, b) {
//     return a / b;
// }

// console.log(remainder(5, 4));
// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
function modulo(a, b) {
    return a % b;
}

console.log(modulo(8, 3));
// Write a function named cube(n) that returns n * n * n
function cube(x) {
    return x * x * x;
}

console.log(cube(2));
// Write a function named squareRoot(n) that returns the square root of the input
function squareRoot(x) {
    return Math.sqrt(x);
}

console.log(squareRoot(16));
// Write a function named cubeRoot(n) that returns the cube root of the input
function cubeRoot(x) {
    return Math.cbrt(x);
}

console.log(cubeRoot(64));
//// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
// function invertSign(x) {
//     return parseInt(x) * -1;
// }
//
// console.log(invertSign(-1));
// Write a function named degreesToRadians(number)
function degreesToRadians(x) {
    return (x/180) * Math.PI;
}

console.log(degreesToRadians(1));
// Write a function named radiansToDegrees(number)
function radiansToDegrees(x) {
    return (x/Math.PI) * 180;
}

console.log(radiansToDegrees(1));
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
function isBlank(x) {
    return x === '';
}

console.log(isBlank(''));
//     Make a function named trim(string) that removes empty spaces before and after the input.
function trim(x) {
    return x.trim();
}

console.log(trim(' leaves'));
//     Make a function named areEqual(input1, input2) that returns if both inputs have the same value
function areEqual(x, y) {
    return x == y;
}

console.log(areEqual(1, '1'));
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
function notInput(a, b) {
    return a === b;
}

console.log(areEqual(1, 1));
//     Make a function named not(input) returns the input with a flipped boolean
function not(x) {
    return !x;
}

console.log(not(0));
// Make a function named notNot(input) that the negation of the negation of the input.
function notNot(x) {
    return !!x;
}

console.log(notNot(1));
////     Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// function and(a, b) {
//     return a && b;
// }
//
// console.log(and(1, 1));
// console.log(and('one', 'two'));
//// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
//// Write a function called reverseString(string) that reverses a string
// function reverseString(x) {
//     return x.reverse();
// }
//
// console.log(reverseString('sam'));
//// Make a function named absoluteValue(number) that returns the absolute value of a number.
////     Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.

function returnTwo() {
    return 2;
}

console.log(returnTwo());

function sayHowdy() {
    return 'Howdy';
}

console.log(sayHowdy());

function returnName() {
    return 'Lord Turkey'
}

console.log(returnTwo());

function addThree(x) {
    return x + 3;
}

console.log(addThree(1));

function sayString(x) {
    return x;
}

console.log(sayString('hi there'));