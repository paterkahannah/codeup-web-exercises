// for (var i = 1; i <= 30; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     if (i % 3 === 0) {
//         console.log('Fizz')
//     }
//     if (i % 5 === 0) {
//         console.log('Buzz')
//     }
//     else {
//         console.log(i)
//     }
// }
///////
// // see davids es6 code
//
// // exercise 2, write function that retusn the number 7
//
// function return7 () {
//     return 7;
// }
// console.log(return7());
//
// const returnSeven = () => 7;
// console.log(returnSeven());


const multipleFive = x => isNaN(x) ? 0: x * 5;

console.log(multipleFive(5));