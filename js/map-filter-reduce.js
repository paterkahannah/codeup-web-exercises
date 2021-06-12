'use strict';
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
console.log(users);

// 2 Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const user = users.filter(users => users.languages.length > 2);
console.log(user);

// 3 Use .map to create an array of strings where each element is a user's email address
const emails = users.map(users => users.email);
console.log(emails);

// 4 Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const avgExperience = users.reduce((accumulation, user) => accumulation + user.yearsOfExperience / users.length, 0);
console.log(avgExperience);

// 5 Use .reduce to get the longest email from the list of users.
const longestEmails = users.reduce((longest, current) =>
    longest.email.length > current.email.length ? longest : current ).email;
console.log(longestEmails);

// 6 Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let instructors = users.reduce(function(accumulator, user, index, usersArray){
    if(index === usersArray.length - 1){
        accumulator.push(user.name);
        let names = accumulator.join(', ');
        names = "Your instructors are: " + names + "."
        return names;
    }else {
        accumulator.push(user.name);
        return accumulator;
    }
}, [])
console.log(instructors);


// BONUS .reduce
const uniqueLanguages = users.reduce((finalList, currentEmail) => {
    currentEmail.languages.map(language => {
        !finalList.includes(language) ? finalList.push(language) : null ;
    });
    return finalList;
}, []);

console.log(uniqueLanguages)