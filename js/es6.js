/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];
console.log(users);

// TODO: fill in your name and email and add some programming languages you know to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable declared as `const`

const name = 'HANNAH';
const email = 'paterkahannah@gmail.com';
const languages = ['html', 'css', 'javascript'];

// TODO: rewrite the object literal using object property shorthand

users.push({
  name,
  email,
  languages
});

// TODO: replace `var` with `let` in the following variable declarations

let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions

users.forEach(user => emails.push(user.email));

users.forEach(user => names.push(user.name));

console.log(emails);
console.log(names);

// TODO: replace `var` with `let` in the following declaration

let developers = [];

// TODO: rewrite the code below to use object destructuring assignment. Note that you can also use destructuring assignment in the function parameter definition
// TODO: rewrite the assignment below to use template strings

users.forEach(user => {
  const {name, email, languages} = user;
  developers.push(`${name}\'s email is ${email}, ${name} knows ${languages.join(', ')}`);
});
console.log(developers);

// TODO: Use `let` for the following variable
// TODO: rewrite the following loop to use a for..of loop
// TODO: rewrite the assignment below to use template strings

let list = `<ul>\n`;
for (let developer of developers) {
  list += `<li> ${developer} </li>\n`;
}
list += `</ul>`;
console.log(list);