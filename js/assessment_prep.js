// # JavaScript Second reassessment Review
// ## Instructions
// 0. *Carefully* read *all* the instructions and problems before beginning your work.
//
// ## Problems
// 1. Create a function named `calcAge` that takes the age and return the age in days. If input is not numeric, calcAge should return false.
// function calcAge(age) {
//     if (typeof(age) === 'number') {
//         var ageInDays = (age * 365);
//         return  ageInDays + " is your age in days"
//     } else {
//         return false
//     }
// }
// console.log(calcAge(1));

//
//
// 2. Create a function named `increment` that takes a number as an argument, increments the number by +1 and returns the result. If input is not numeric, increment should return false.
// function increment(number) {
//     if (typeof(number) === 'number') {
//         var newNumber = number + 1;
//         return newNumber
//     } else {
//         return false
//     }
// }
// console.log(increment(0);

//
//
// 3. Define a function named `isOdd` that takes in a number, return true is that number is odd. Return false if the number is either not a number or even.
// function isOdd(number) {
//     console.log("arg enter is: " + number + ' and is a typeOf: ' +typeof(number))

//     if (typeof(number) === 'number' && number % 2 !== 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isOdd(2));

//
//
// 4. Write a function named `oddArr`. Given the array of var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] return the odd numbers.

// function oddArr() {
// var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var oddNumbers = arry.filter(number => number % 2 !== 0);
// // console.log(oddNumbers);
// return oddNumbers.toString();

//     // for (i = 0; i < arry.length; i++) {
//     //     if(arry[i] % 2 !== 0) {
//     //         console.log(arry[i])
//     //     }
//     // }
// }

// console.log(oddArr());

//
//
// 5. Define a function named `creditCard` that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.
// function creditCard(ccNumber) {
//     var cardNumberInput = ccNumber;
//     // Convert to array and replace
//     var cardNumber = Array.from(cardNumberInput.toString()).map(Number);
//     var lastFour = cardNumber.fill('*', 0, 12).join("");
//     return lastFour;
// }
// console.log(creditCard(1234123412345578));

//
//
// 6. create a function named `AlphabetSoup` that takes a string and returns a string with its letters in alphabetical order. Return false if string is empty or null

function alphabetSoup(string) {


}
//
//
// 7. create a function named `reverse` that takes in and reverses an array.
// # regulus-second-js-reassessment-review


let originalString;
let myOutput = `${originalString} is an example of ${description} thinking.`;

let myOutput = '${originalString} is an example of ${description} thinking.'



const myOutput = `{originalString} is an example of {description} thinking.`;

