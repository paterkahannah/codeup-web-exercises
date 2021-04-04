'use strict';

/*
 * Title: JS Objects Practice
 * Author: Ryan Orsinger
 * Topics: JS Objects, arrays, writing methods, iteration
 */


// Exercise 1. Write a function called makeCar that takes in two strings, make and model, and returns an object with those properties
// Example: makeCar("VW", "beetle") returns the object {"make": "VW", "model", "beetle"}

function MakeCar(make, model) {
    {
        this.make = make;
        this.model = model;
    }
}

var newCar = new MakeCar('Tesla', 'Model 3');
// console.log(newCar);

// Exercise 2. Use the following data to create an object named salesReport.
//     The object should have the following properties:
//       title, date, office, and employees.
//       the employees property should hold an array of objects.
//       each employee should be represented by an object with the following properties:
//         employee-number, first-name, last-name, sales-units
//

var salesReport = {
    title: 'Monthly Sales Report',
    date: 'Date: 03-17-2015',
    office: 'Office: Codeup',
    columns: {
        column1: 'Employee Number',
        column2: 'First Name',
        column3: 'Last Name',
        column4: 'Sales Unit'
    },
    employees: [
        {
            employeeNumber: 1,
            firstName: 'Jane',
            lastName: 'Janeway',
            salesUnit: 3
        },
        {
            employeeNumber: 3,
            firstName: 'Tricia',
            lastName: 'Triciason',
            salesUnit: 5
        },
        {
            employeeNumber: 4,
            firstName: 'Jeanette',
            lastName: 'Jeanson',
            salesUnit: 4
        },
        {
            employeeNumber: 5,
            firstName: 'Charles Emerson III',
            lastName: 'Winchester',
            salesUnit: 2
        },
        {
            employeeNumber: 6,
            firstName: 'Chet',
            lastName: 'Chedderson',
            salesUnit: 8
        },
        {
            employeeNumber: 7,
            firstName: 'Chaiam',
            lastName: 'Chaiason',
            salesUnit: 12
        },
        {
            employeeNumber: 8,
            firstName: 'Dale',
            lastName: 'Dalesinger',
            salesUnit: 1
        },
        {
            employeeNumber: 9,
            firstName: 'Zig',
            lastName: 'Ziglar',
            salesUnit: 50
        },
        {
            employeeNumber: 10,
            firstName: 'Henry',
            lastName: 'Kissinger',
            salesUnit: 1
        },
        {
            employeeNumber: 11,
            firstName: 'Arthur Herbert',
            lastName: 'Fonzarelli',
            salesUnit: 23
        },
        {
            employeeNumber: 12,
            firstName: 'Betty',
            lastName: 'Boop',
            salesUnit: 67
        }
    ]
};

console.log('',
    salesReport.title, '\n',
    salesReport.date, '\n',
    salesReport.office, '\n', '===================================================', '\n',
    salesReport.columns.column1 + ', ' +
    salesReport.columns.column2 + ', ' +
    salesReport.columns.column3 + ', ' +
    salesReport.columns.column4, '\n', '***************************************************'
);

salesReport.employees.forEach(function (employee) {
    console.log(' ' + employee.employeeNumber + ', ' + employee.firstName + ', ' + employee.lastName + ', ' + employee.salesUnit)
});

// Monthly Sales Report
// Date: 03-17-2015
// Office: Codeup
// ===================================================
// Employee Number, First Name, Last Name, Sales Units
// ***************************************************
// 1, Jane, Janeway, 3
// 3, Tricia, Triciason, 5
// 4, Jeannette, Jeanson, 4
// 5, Charles Emmerson III, Winchester, 2
// 6, Chet, Chedderson, 8
// 7, Chaiam, Chaiamson, 12
// 8, Dale, Dalesinger, 1
// 9, Zig, Ziglar, 50
// 10, Henry, Kissinger, 1
// 11, Arthur Herbert, Fonzarelli, 23
// 12, Betty, Boop, 67

// Exercise 3. On the salesReport object you made, add the following methods.
// getEmployeeCount() should return the total number of employees
// getTotalNumberOfSales() should return the total number of units sold
// getAverageSalesPerEmployee() should return the average units sold per employee


// Exercise 4. Go to https://gist.githubusercontent.com/ryanorsinger/f77e5ec94dbe14e21771/raw/d4a1f916723ca69ac99fdcab48746c6682bf4530/profiles.json
// then copy the JSON and assign it to a variable named profiles.

// Exercise 5. Create an object named profileReport and add the following methods that use the "profiles" JSON data.
//  getProfileCount() should return the total number of profiles
//  getActiveCount() should return the number of active profiles
//  getInactiveCount() should return the number of inactive profiles
//  sumOfAllBalances() should return sum of the balance of all profiles
//  getAverageBalance() should return the average balance per users
//  getLowestBalance() should return the customer name with the lowest balance
//  getHighestBalance() should return the customer name with the highest balance
//  getMostFavoriteFruit() should return the most common fruit
//  getLeastFavoriteFruit() should return the least favorite fruit
//  getTotalNumberOfUnreadMessages() should return the number of unread messages for all users
//  getAverageNumberOfUnreadMessages() should return the average number of unread mesages per user.
//  getAverageAge() should return the average age of all users
//  getGenderCounts() should return gender count of users as an object: example {"m": 23, "f", 32}
//  getAllCompanyNames() should return an array of all companies represented by the users
//  getMostCommonEyeColor() should return the most commonly occuring eye-color.
//  getBalancesForActiveAndNonActive() should return the balance of all non-active accounts vs. the balance of all active accounts?
//     this last method should return an object that looks like {"active-balances": 23000, "inactive-balances": 4000} w/ different numbers.


// Exercise 6. Practice with assignment by reference
// create a variable named person1 with a name property. Assign it a name property.
// Now create a variable named person2 and assign person1 to it.
// Then reassign the name property on person2 with person2.name = "Bob";
// console.log the name property on person 1.
// Why do you think changing person2 altered person1?
// The term for this behavior is assignment by reference.


// Exercise 7. More practice with assignment by reference
// Add the following HTML to your index.html page in this project.
// <input type="text" id="input" name="input">
// now, create a variable named input and assign it document.getElementById("input").
// now run input.value = "Hello" from the JS console. Did you see any HTML change?
// Create a second variable named inputElement.
// var inputElement = document.getElementById("input");
// now, run inputElement.value = "I am altering an object by altering its properties" in your JS console.
// See how both the "input" and "textInput" varialbes are referencing the same underlying HTML element?
// This behavior is another example of "assignment by reference"
// OBJECTS BONUSES
// Create a dog object
//
// The dog object should have properties for:
//
// breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     sterilized (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
// The dog object should have methods to:
////
//     bark() - will console.log "Woof!"
// getOlder() - will increase age by 1
// fix() - will set sterile to true if dog sterilized property is false
// vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array
// Expanding on the books object exercise:
//
//     Add a property keywords that contains an array of possible genres the book may be categorized by
// Add a boolean property available and set it to true
// Add a dateAvailable property that has a string of the date/time when the book will be available
// Add a method lend() that...
// changes the available property to false if it is not already false
// sets the dateAvailable to a date exactly two weeks from when the lend() method is called (to do this, research the JS Date object and use methods from it in your code) Add a method receive() that...
// changes the available property to true
// changes the dateAvailable property to the string "now"
// Expanding on the books object exercise:
//
//     Create an application to take in user input to build the books array of objects.
//     Allow the user to continue adding books or to finish adding books.
//     Once the books have been added, output the books array in the console.
//     Allow a user to delete a book or a group of books by title or author last name
// Allow a user to edit a book by index number in the books array
// Define an object called jackBox
//
// Include properties for...
//
// triggered - whether or not the box has been sprung (should be false by default)
// intervalId - set to null
// play() - once called, if triggered is false, console.log one new element in the lyrics array every second after the lyrics, stop the interval, set the triggered property to true, and alert POP!
//     windUp() - once called will stop the play() method and set triggered to false lyrics - an array with the following elements:
//
//     "All a-...",
//         "-round the ...",
//         "mulberry...",
//         "bush, The...",
//         "monkey...",
//         "chased the...",
//         "wea-...",
//         "-sel...",
//         "The monkey...",
//         "stopped to...",
//         "pull up his...",
//         "sock,...",
//         "Pop!...",
//         "goes the...",
//         "wea-...",
//         "-sel."
// When running, current lyrics should also be displayed on the page.
//
//     Build a Stop Watch
//
// Define an object called stopWatch.
//
//     Include the following properties...
//
// intervalId
// count
// Include the following methods...
//
// start() - starts console logging an increasing count every second pause() - pauses counter reset() - stops counter and resets count to zero
//
// Coding Challenge Amateur
//
// Write a function that takes in a sentence and returns the length of the longest word.
//
// "I like going out to parties with friends or watching TV." => 8
// Write a function that takes three parameters: a, b, c. Return the boolean true if a^2 + b^2 = c^2, false if not.
//
//     3, 4, 5 => true
// 4, 5, 6 => false
// Write a function that takes a string and returns a "title case" string
//
// "The QUICK brown fox JuMpS ovER the LAZy dog"
// The Quick Brown Fox Jumps Over The Lazy Dog"
// Write a function that returns and object with keys set to the argument passed in and values equal to the types of the corresponding keys. Arguments will be type "number", "string", or "boolean".
//
// // input
//     ["hey", 1, "Jeffrey wants to goto the store", false]
// // output
// {
//     hey: "string",
//         1: "number",
//     "Jeffrey wants to goto the store": "string",
//     false: boolean
// }
// Write a function that takes two strings as input and returns true or false depending on whether they are anagrams(contain exactly the same letters). Only lowercase letters will be passed.
//
// "overcast", "overacts" => true
// "Jimbo", "Jason" => false