"use strict";

console.log("Hello from External Javascript");

alert("Welcome to my website!");
var response = prompt ("What's your favorite color?");
alert("Great, " + response + " is my favorite color too.");


var mermaid = parseFloat(prompt('How many days did you rent Little Mermaid?'));
var bear = parseFloat(prompt("How many days did you rent Brother Bear?"));
var hercules = parseFloat(prompt("How many days did you rent Hercules?"));
var total = alert("Total cost for the rentals was $" + (mermaid + bear + hercules));


var google = parseFloat(prompt('How many days did you work at Google?'));
var amazon = parseFloat(prompt("How many days did you work at Amazon?"));
var facebook = parseFloat(prompt("How many days did you work at Facebook?"));
var total = alert("Your total paycheck was $" + (google*400 + amazon*380 + facebook*350));


var classMax = 40;
var spotsFilled = 27;
var classOpen = classMax > spotsFilled;
var noConflict = confirm('Can you do a 9am class?');
// write an if statement to decide about alert message???
var canAttend = classOpen && noConflict;
//alert('You can attend!');


var buysMinimum = true;
var offerNotExpired = true;
var isMember = true;
var offerApplied = (isMember || buysMinimum) && offerNotExpired;
//same as above