"use strict";

function isOdd(x) {
    return x % 2 !== 0;
}

console.log(isOdd(1));

function isEven(x) {
    return x % 2 === 0;
}

console.log(isEven(2));

// Make a function named identity(input) that returns the input exactly as provided.
function identityInput(x) {
    return x;
}

console.log(identityInput('returning exact input provided'));

function isFive(x) {
    return x === 5;
}

console.log(isFive(5));

function addFive(x) {
    return x + 5;
}

console.log(addFive(-4));

function isMultipleOfFive(x) {
    return x % 5 === 0;
}

console.log(isMultipleOfFive(5));

function isThree(x) {
    return x === 3;
}

console.log(isThree(3));

function isMultipleOfThree(x) {
    return x % 3 === 0;
}

console.log(isMultipleOfThree(9));

function isMultipleOfThreeAndFive(x) {
    return x % 3 === 0 && x % 5 === 0;
}

console.log(isMultipleOfThreeAndFive(15));

function isMultipleOf(x, y) {
    return x % y === 0;
}

console.log(isMultipleOf(15, 5));

// Make a function named isTrue(boolean)
function isTrue(x) {
    return x === true;
}

console.log(isTrue(true));

// Make a function named isFalse(boolean)
function isFalse(x) {
    return x === false;
}

console.log(isFalse(false));

// Make a function named isTruthy(input), remember that values other than true will behave like true
function isTruthy(x) {
    return x == true;
}

console.log(isTruthy('w'));

// Make a function named isFalsy(input), remember that values other than false behave like false
function isFalsy(x) {
    return x == false;
}

console.log(isFalsy(0));

function isVowel(x) {
    x = x.toLowerCase();
    return (/^[aeiou]$/i).test(x);
}
console.log(isVowel('A'));

function isConsonant(x) {
    return !(/^[aeiou]$/i).test(x);
}

console.log(isConsonant('z'));

function isCapital(x) {
    return x === x.toUpperCase();
}

console.log(isCapital('A'));

function isLowerCase(x) {
    return x === x.toLowerCase();
}

console.log(isLowerCase('a'));

// // Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
// function hasLowerCase(x) {
//     return x === x.toLowerCase();
// }
//
// console.log(hasLowerCase('Run'));

// Make a function named isSpace(letter) that returns if a character is a space character
function isSpace(x) {
    return x === ' ';
}

console.log(isSpace(' '));

function isZero(x) {
    return x === 0;
}

console.log(isZero(0));

function notZero(x) {
    return x !== 0;
}

console.log(notZero(1));

function lowerCaseString(x) {
    return x.toLowerCase();
}

console.log(lowerCaseString('TO LOWERCASE'));

function double(x) {
    return x * 2
}

console.log(double(0.5));

function triple(x) {
    return x * 3;
}

console.log(triple(.33));

function qualruple(x) {
    return x * 4;
}

console.log(qualruple(.25));

function half(x) {
    return x / 2;
}

console.log(half(2));

function subtract(x, y) {
    return x - y;
}

console.log(subtract(2, 1));

function multiply(x, y) {
    return x * y;
}

console.log(multiply(1, 1));

function divide(a, b) {
    return a / b;
}

console.log(multiply(1, 1));

function remainder(a, b) {
    return a % b;
}

console.log(remainder(3, 2));

function modulo(a, b) {
    return a % b;
}

console.log(modulo(3, 2));

function cube(x) {
    return x * x * x;
}

console.log(cube(2));

function squareRoot(x) {
    return Math.sqrt(x);
}

console.log(squareRoot(16));

function cubeRoot(x) {
    return Math.cbrt(x);
}

console.log(cubeRoot(64));
// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
function invertSign(x) {
    typeof x === 'number' ? x * -1 : false;
}

console.log(invertSign(-1));
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

console.log(returnName());

function addThree(x) {
    return x + 3;
}

console.log(addThree(1));

// function sayString(x) {
//     return x;
// }
//
// console.log(sayString('hi there'));

//Challenge Function Drills

// Write a function called identity(input) that takes in an argument called input and returns that input.
// function identity(input) {
//     return input;
// }
//
// console.log(identity(input));
//
//     Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
function getRandomNumber(min, max){
    return Math.floor(Math.random() * max) + min;
}

console.log(getRandomNumber(1, 9));

// Write a function called first(input) that returns the first character in the provided string.
function first(x) {
    return x.substring(0, 1);
}

console.log(first('Hannah'));

//     Write a function called last(input) that returns the last character of a string
function last(x) {
    return x.charAt(x.length-1);
}

console.log(last('Hannah'));
// Write a function called rest(input) that returns everything but the first character of a string.
function rest(x) {
    return x.substring(1, x.length-0);
}

console.log(rest('Hannah'));
//     Write a function called reverse(input) that takes a string and returns it reversed.
// function reverse(x) {
//     return x.reverse();
// }
//
// console.log(reverse('Hannah'));
//     Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
//
//     Write a function called count(input) that takes in a string and returns the number of characters.
//
//     Write a function called add(a, b) that returns the sum of a and b
function add(a, b) {
    return a + b;
}

console.log(add(1, 1));
// Write a function called subtract(a, b) that return the difference between the two inputs.
function suntract(a, b) {
    return a - b;
}

console.log(suntract(2, 1));
//     Write multiply(a, b) function that returns the product
function multiply (a, b) {
    return a * b;
}

console.log(multiply(1, 1));
// Write a divide(numerator, denominator) function that returns a divided by b
function divide(a, b) {
    return a / b;
}

console.log(divide(2, 1));
// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
function remainder(number, dividor) {
    return number % dividor;
}

console.log(remainder(4, 3));
// Write the function square(a) that takes in a number and returns the number multiplied by itself.
function square(x) {
    return x * x;
}

console.log(square(4));
//     Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
// function sumOfSquares(a, b) {
//     return square().add(square()) ;
// }
//
// console.log(sumOfSquares(4, 4));
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
function doMath(operator, a, b) {
    return operator(a, b);
}

console.log(doMath(add, 1, 2));
// Create a function that will return how many whitespace characters are at the beginning and end of a string.
function numberWhiteSpace(x) {
    return(x.match(/^(\s*)/).length);
}

console.log(numberWhiteSpace('  Hannah  '));
//
// Create a function that takes in two string inputs.
//     If the second string input is present in the first, return the first input string with the second input string removed from it.

//     If the second string input is not present in the first, return the first string as entered in the function.
// function twoString(x, y) {
//     if (x.contains(y)) {
//         return x;
//     } else if {
//         return ;
//     } else {
//       return x;
//     }
// }
// ///// use loop????
// console.log(twoString('ban', 'ana'));
//

//     If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.








// Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).
function lastLetterA(x) {
    return x.charAt(x.length-1) === 'a';
}

console.log(lastLetterA('hanna'));

// EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
function spacesAtBeginning(x) {
    return x.split(' ').length;
}

console.log(spacesAtBeginning(' hanna '))
// Create a function returnTrueMessage() that returns the string "Hey, it's true!"
function returnTrueMessage(x) {
    if (x === true) {
        return 'hey it is true'
    }
}

console.log(returnTrueMessage(true));
// Create a function returnFalseMessage() that returns the string "Hey, it's false!"
function returnFalseMessage(x) {
    if (x === false) {
        return 'Hey, it\'s false'
    }
}

console.log(returnFalseMessage(false));
// Create a function returnMessage() that takes in a function and returns the call to the function
// function returnMessage() {
//     returnTrueMessage()
//         return 'words returnTrueMessage';
// }
//
//
// console.log(returnMessage());
// Experiement passing in different functions.
//     Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
//     The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.
function willLoginUser(user, pass, age, admin) {
    return user !== pass && (age >= 18 || admin === true);
}

console.log(willLoginUser('hp', 'bat', 17, false));
