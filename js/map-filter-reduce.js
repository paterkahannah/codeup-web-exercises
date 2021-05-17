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

//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const user = users.filter(function(n) {
    return n.languages.length > 2;
});
console.log(user);

//     Use .map to create an array of strings where each element is a user's email address

const emails = users.map(n => n.email);
console.log(emails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const avgExperience = users.reduce((accumulation, user) => {
    // return accumulation + user.yearsOfExperience;
    return accumulation + user.yearsOfExperience / users.length;
}, 0);
console.log(avgExperience);

//     Use .reduce to get the longest email from the list of users.

const longestEmails = users.reduce((longest, current) => {
   return longest.email.length > current.email.length ? longest : current ;
}).email;
console.log(longestEmails);

//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const names = users.reduce((accumulation, user) => {
    // return accumulation + user.yearsOfExperience;
    return accumulation + `${user.name}, `;
}, 0);
console.log(names);

// BONUS.reduce

const uniqueLanguages = users.reduce((languages, user) => {
    user.languages.forEach((language) => {
        !languages.includes(language) ? languages.push(language) : null ;
    });
    return languages;
}, [])

console.log(uniqueLanguages);