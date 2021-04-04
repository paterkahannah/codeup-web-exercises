"use strict";
//
// function isOdd(x) {
//     return x % 2 !== 0;
// }
//
// console.log(isOdd(1));
//
// function isEven(x) {
//     return x % 2 === 0;
// }
//
// console.log(isEven(2));
//
//
// function identityInput(x) {
//     return x;
// }
//
// console.log(identityInput('returning exact input provided'));
//
// function isFive(x) {
//     return x === 5;
// }
//
// console.log(isFive(5));
//
// function addFive(x) {
//     return x + 5;
// }
//
// console.log(addFive(-4));
//
// function isMultipleOfFive(x) {
//     return x % 5 === 0;
// }
//
// console.log(isMultipleOfFive(5));
//
// function isThree(x) {
//     return x === 3;
// }
//
// console.log(isThree(3));
//
// function isMultipleOfThree(x) {
//     return x % 3 === 0;
// }
//
// console.log(isMultipleOfThree(9));
//
// function isMultipleOfThreeAndFive(x) {
//     return x % 3 === 0 && x % 5 === 0;
// }
//
// console.log(isMultipleOfThreeAndFive(15));
//
// function isMultipleOf(x, y) {
//     return x % y === 0;
// }
//
// console.log(isMultipleOf(15, 5));
//
// function isTrue(x) {
//     return x === true;
// }
//
// console.log(isTrue(true));
//
// function isFalse(x) {
//     return x === false;
// }
// console.
//log(isFalse(false));
//
// function isTruthy(x) {
//     return x == true;
// }
//
// console.log(isTruthy(1));
//
// function isFalsy(x) {
//     return x == false;
// }
//
// console.log(isFalsy(0));
//
// function isVowel(x) {
//     x = x.toLowerCase();
//     return (/^[aeiou]$/i).test(x);
// }
//
// console.log(isVowel('A'));
//
// function isConsonant(x) {
//     return !(/^[aeiou]$/i).test(x);
// }
//
// console.log(isConsonant('z'));
//
// function isCapital(x) {
//     return x === x.toUpperCase();
// }
//
// console.log(isCapital('A'));
//
// function isLowerCase(x) {
//     return x === x.toLowerCase();
// }
//
// console.log(isLowerCase('a'));
//
// // Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
// function hasLowerCase(x) {
//     return x.contains(/^[a-z]$/i);
// }
//
// console.log(hasLowerCase('Run'));
//
//
// function isSpace(x) {
//     return x === ' ';
// }
//
// console.log(isSpace(' '));
//
// function isZero(x) {
//     return x === 0;
// }
//
// console.log(isZero(0));
//
// function notZero(x) {
//     return x !== 0;
// }
//
// console.log(notZero(1));
//
// function lowerCaseString(x) {
//     return x.toLowerCase();
// }
//
// console.log(lowerCaseString('TO LOWERCASE'));
//
// function double(x) {
//     return x * 2
// }
//
// console.log(double(0.5));
//
// function triple(x) {
//     return x * 3;
// }
//
// console.log(triple(.33));
//
// function qualruple(x) {
//     return x * 4;
// }
//
// console.log(qualruple(.25));
//
// function half(x) {
//     return x / 2;
// }
//
// console.log(half(2));
//
// function subtract(x, y) {
//     return x - y;
// }
//
// console.log(subtract(2, 1));
//
// function multiply(x, y) {
//     return x * y;
// }
//
// console.log(multiply(1, 1));
//
// function divide(a, b) {
//     return a / b;
// }
//
// console.log(multiply(1, 1));
//
// function remainder(a, b) {
//     return a % b;
// }
//
// console.log(remainder(3, 2));
//
// function modulo(a, b) {
//     return a % b;
// }
//
// console.log(modulo(3, 2));
//
// function cube(x) {
//     return x * x * x;
// }
//
// console.log(cube(2));
//
// function squareRoot(x) {
//     return Math.sqrt(x);
// }
//
// console.log(squareRoot(16));
//
// function cubeRoot(x) {
//     return Math.cbrt(x);
// }
//
// console.log(cubeRoot(64));
//
// function invertSign(x) {
//     if (!isNaN(x)) {
//         return x * -1;
//     } else {
//         return false;
//     }
// }
//
// console.log(invertSign(-1));
//
// function degreesToRadians(x) {
//     return (x / 180) * Math.PI;
// }
//
// console.log(degreesToRadians(57.2958));
//
// function radiansToDegrees(x) {
//     return (x / Math.PI) * 180;
// }
//
// console.log(radiansToDegrees(0.0174533));

// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
// function isBlank(x) {
//     return x === '';
// }
//
// console.log(isBlank(''));
//
// function trim(x) {
//     return x.trim();
// }
//
// console.log(trim(' leaves '));
//
// function areEqual(x, y) {
//     return x == y;
// }
//
// console.log(areEqual(1, '1'));
//
// function notInput(a, b) {
//     return a === b;
// }
//
// console.log(areEqual(1, 1));
//
// function not(x) {
//     return !x;
// }
//
// console.log(not(0));
//
// function notNot(x) {
//     return !x;
// }
//
// console.log(notNot(!1));









//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND
function and(a, b) {
    return a + b;
}

console.log(and(1, 0));
console.log(and('one', 'two'));
console.log(and(true, false))
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR

function or(x, y) {
    return (x || y);
}

console.log(or(false, false));

// function reverseString(x) {
//     return x.reverse();
// }
//
// console.log(reverseString('sam'));

function absoluteValue(number) {

}
//     Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.

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

function sayString(x) {
    return x;
}

console.log(sayString('hi there'));

// Challenge Function Drills
//
// Write a function called identity(input) that takes in an argument called input and returns that input.
function identity(input) {
    return input;
}

console.log(identity('x'));

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

console.log(getRandomNumber(1, 9));

function first(x) {
    return x.substring(0, 1);
}

console.log(first('Hannah'));

function last(x) {
    return x.charAt(x.length - 1);
}

console.log(last('Hannah'));

// returns everything but first character
function rest(x) {
    return x.substring(1, x.length - 0);
}

console.log(rest('Hannah'));

function reverse(x) {
    return x.split('').reverse().join('');
}

console.log(reverse('heh Hannah'));
//     Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
//
//     Write a function called count(input) that takes in a string and returns the number of characters.
//
function add(a, b) {
    return a + b;
}

console.log(add(.5, .5));

function subtract(a, b) {
    return a - b;
}

console.log(subtract(2, 1));

function multiply(a, b) {
    return a * b;
}

console.log(multiply(1, 1));

function divide(a, b) {
    return a / b;
}

console.log(divide(1, 1));

function remainder(number, dividor) {
    return number % dividor;
}

console.log(remainder(4, 3));

function square(x) {
    return x * x;
}

console.log(square(1));

function sumOfSquares(a, b) {
    return add(square(a),(square(b)));
}

console.log(sumOfSquares(.75, .7));
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
function doMath(operator, a, b) {
    return operator(a, b);
}

console.log(doMath(add, .5, .5));

// Create a function that will return how many whitespace characters are at the beginning and end of a string.
function numberWhiteSpace(x) {
    return (x.match(/^(\s*)/).length);
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

function lastLetterA(x) {
    return x.charAt(x.length - 1) === 'a';
}

console.log(lastLetterA('jobana'));

function spacesAtBeginning(x) {
    return x.search(/\S|$/);
}

console.log(spacesAtBeginning(' Hannah '))

function returnTrueMessage(x) {
    return 'Hey it is true'
}

console.log(returnTrueMessage());

function returnFalseMessage(x) {
        return 'Hey, it\'s false';
}

console.log(returnFalseMessage());

// takes in a function and returns the call to the function
function returnMessage(x) {
        return x;
}

console.log(returnMessage(returnFalseMessage()));
// Experiement passing in different functions.
//     Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
//     The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.
function willLoginUser(user, pass, age, admin) {
    return user !== pass && (age >= 18 || admin === true);
}

console.log(willLoginUser('hp', 'bat', 17, false));
