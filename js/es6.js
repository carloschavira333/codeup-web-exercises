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

// TODO: fill in your name and email and add some programming languages you know to the languages array

// new shorthand
// var name = 'CARLOS';
// var email = 'CARLOS@CODEUP.COM';
// var languages = ['HTML', 'CSS', 'JS'];
//
// const person = {
//   name,
//   age: 4,
// };

// Adding to an array of objects:
    // add an object as a new element to the end of the existing array ('how to add to end of an array' -method)  We can use .push()

    // access the newly added object (what index is that obj sitting at? how can you access that specific obj?)

    // once you have access to newly added object, how do you add properties to an empty object and then assign values to those new properties?

// let myObj = {
//   a: 'a',
//   b: 'b',
//   c: 'c'
// }
// myObj.d = 'd';
// console.log(myObj);

//
// users[users.length] = {name: 'Carlos', email: 'Carlos@codeup.com', languages: ['HTML', 'CSS', 'JS']}


// var newPerson = {
//   name: 'carlos',
//   email: 'carlos@codeup.com',
//   languages: ['html', 'css', 'js']
// }
//
// users.push(newPerson);
//
//
// console.log(users)
// console.log(users[5])

// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
var name = 'Carlos';
var email = 'carlos@codeup.com';
var languages = ['HTML', 'CSS', 'JS'];

// TODO: rewrite the object literal using object property shorthand
users.push({
  name: name,
  email: email,
  languages: languages
});


// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];



// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });

users.forEach(user => console.log(user.email))

// users.forEach(function(user) {
//   return names.push(user.name);
// });
users.forEach(user => console.log(user.name))


// console.log(users)


// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;
  // console.log(user)
  const {name, email, languages} = user;
  // console.log(name)
  // TODO: rewrite the assignment below to use template strings
  // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
  developers.push(`${name} email is ${email} knows ${languages}`)
  console.log(developers)
  // console.log('developers.push ....', developers.push(`${name} email is ${email} knows ${languages}`))
  // console.log(developers.push(`${this.name}, 's email is', ${this.email}, 'knows', ${this.languages}`))
});

// TODO: Use `let` for the following variable
// let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
  // console.log(developer)
  // TODO: rewrite the assignment below to use template strings
//   list += '<li>' + developer + '</li>';
// });
// list += '</ul>';


// Code below is the rewrite into a for of loop as well as rewriting into template strings
let list = '<ul>';
for(let developer of developers) {
  list += `<li> ${developer} </li>`
  console.log(list)
}
list += '</ul>';


