"use strict";

// part 1
console.log("Hello from External Javascript");

alert("Welcome to my website!");

// part 2
var response = prompt ("What's your favorite color?");

alert("Great, " + response + " is my favorite color too.");

// part 3.1
var mermaid = parseFloat(prompt('How many days did you rent Little Mermaid?'));
var bear = parseFloat(prompt("How many days did you rent Brother Bear?"));
var hercules = parseFloat(prompt("How many days did you rent Hercules?"));

var total = alert("Total cost for the rentals was $" + ((mermaid + bear + hercules)*3));

// part 3.2
var google = parseFloat(prompt('How many hours did you work at Google?'));
var amazon = parseFloat(prompt("How many hours did you work at Amazon?"));
var facebook = parseFloat(prompt("How many hours did you work at Facebook?"));

var googleRate = parseFloat(400);
var amazonRate = parseFloat(380);
var facebookRate = parseFloat(350);

var totals = alert("Your total paycheck is $" + ((google * googleRate) + (amazon * amazonRate) + (facebook * facebookRate)));

// part 3.3
var classMax = 40;
var spotsFilled = 27;
var classOpen = classMax > spotsFilled;
var noConflict = confirm('Can you do a 9am class?');

if (classOpen && noConflict === true) {
        alert('You can attend!');
    } else {
        alert("Sorry, you can't attend");
    }

// part 3.4
var offerNotExpired = true;
var question = confirm('Are you a member of have you bought 2 items?');

if (question == true) {
        alert('You qualify for offer!');
    }  else {
        alert("Sorry, offer does not apply");
    }
