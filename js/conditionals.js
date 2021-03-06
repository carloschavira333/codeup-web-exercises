"use strict";
/* ################################################## */
/**
 * TODO:
 * Create a function named `analyzeColor`
 * that accepts a string that is a color name as input.
 * This function should return a message which relates to the
 * color stated in the argument of the function.
 * For colors you do not have responses written for, return a string stating so
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 * You should use an if-else-if-else block to return different messages.
 * **********
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(choseColor){
//     var resultOfCondition = "";
//
//     if (choseColor === "blue") {
//         resultOfCondition = "Blue is the color of the sky";
//     } else if (choseColor === "red") {
//         resultOfCondition = "Strawberries are red";
//     } else if (choseColor === "cyan") {
//         resultOfCondition = "I don't know anything about cyan";
//     } else {
//         resultOfCondition = "Not a color in my list."
//     }
//     return resultOfCondition;
// };
// console.log(analyzeColor("blue"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// function analyzeColor(randomColor){
//     var resultOfCondition = "";
//
//     if (randomColor === "blue") {
//         resultOfCondition = "Blue is the color of the sky";
//     } else if (randomColor === "red") {
//         resultOfCondition = "Strawberries are red";
//     } else if (randomColor === "cyan") {
//         resultOfCondition = "I don't know anything about cyan";
//     } else {
//         resultOfCondition = "Not a color in my list";
//     }
//     return resultOfCondition;
// }
//
// console.log(analyzeColor(randomColor));
// console.log(randomColor);
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColor(chosenColor) {
        var resultOfCondition = "";
        switch (chosenColor) {
            case "blue":
                resultOfCondition = "Blue is the color of the sky";
                break;
            case "red":
                resultOfCondition = "Strawberries are red";
                break;
            case "cyan":
                resultOfCondition = "I don't know anything about cyan";
                break;
        }
        return resultOfCondition;
};
console.log(analyzeColor(randomColor));
console.log(randomColor);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var getUserInput = prompt("Pick a color: red, blue or cyan")
//
// function analyzeColor(){
//     var resultOfCondition = "";
//
//     if (getUserInput === "blue") {
//         resultOfCondition = "Blue is the color of the sky";
//     } else if (getUserInput === "red") {
//         resultOfCondition = "Strawberries are red";
//     } else if (getUserInput === "cyan") {
//         resultOfCondition = "I don't know anything about cyan";
//     }
//     return alert(resultOfCondition);
// }
//
// console.log(analyzeColor(getUserInput));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
Write a function named `calculateTotal`
 * which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// var randomNum = Math.floor(Math.random() * 5) + 1;
//
// function calculateTotal(lNum, tAmount) {
//     var discountedPrice = "";
//     if (lNum === 0) {
//      discountedPrice = tAmount - (tAmount * 0);
//         return discountedPrice;
//     } else if (lNum === 1) {
//         discountedPrice = tAmount - (tAmount * .10);
//         return discountedPrice;
//     } else if (lNum === 2) {
//         discountedPrice = tAmount - (tAmount * .25);
//         return discountedPrice;
//     } else if (lNum === 3) {
//         discountedPrice = tAmount - (tAmount * .35);
//         return discountedPrice;
//     } else if (lNum === 4) {
//         discountedPrice = tAmount - (tAmount * .50);
//         return discountedPrice;
//     } else if (lNum === 5) {
//         discountedPrice = tAmount - tAmount;
//         return discountedPrice;
//     }
// };
//
// console.log(calculateTotal(randomNum, 100));
// console.log(randomNum);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var userinput = prompt("Enter total bill: ");
//
// var discountedPrice = "";
//
// function calculateTotal(lNum, tAmount) {
//     if (lNum === 0) {
//      discountedPrice = tAmount - (tAmount * 0);
//         // return discountedPrice;
//     } else if (lNum === 1) {
//         discountedPrice = tAmount - (tAmount * .10);
//         // return discountedPrice;
//     } else if (lNum === 2) {
//         discountedPrice = tAmount - (tAmount * .25);
//         // return discountedPrice;
//     } else if (lNum === 3) {
//         discountedPrice = tAmount - (tAmount * .35);
//         // return discountedPrice;
//     } else if (lNum === 4) {
//         discountedPrice = tAmount - (tAmount * .50);
//         // return discountedPrice;
//     } else if (lNum === 5) {
//         discountedPrice = tAmount - tAmount;
//         // return discountedPrice;
//     };
//
//     alertCustomer();
//
//     return discountedPrice;
//
// };
//
// calculateTotal(luckyNumber, userinput);
//
// function alertCustomer() {
//     alert(`You rolled a lucky number of ${luckyNumber} \n Price before discount ${userinput} \n Price after discount ${discountedPrice}`);
// };

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// var userConfirm = confirm("Would you like to enter a number?");
//
// if (userConfirm === true) {
// // convert user input to a number
//     var userInput = parseInt(prompt("Ok lets get started. Please enter a number:"));
//     // alert(typeof userInput);
//     if (isNaN(userInput) === false) {
//         if (userInput % 2 == 0) {
//             alert("Number is even");
//         } else {
//             alert("Number is odd");
//         }
//         var plus100 = userInput + 100;
//         alert(plus100);
//
//         if (userInput >= 0) {
//             alert("Number is positive")
//         } else {
//             alert("Number is negative")
//         }
//     } else {
//         alert("You entered something other than a number. \n\n" +
//             "To start over: \n" +
//             "1. Press OK \n" +
//             "2. Refresh page to try again.")
//     }
// } else {
//     alert("Have a nice day!")
// };
//
// // Converting the above to a function
//
// var userConfirm = confirm("Would you like to enter a number?");
//
// if (userConfirm === true) {
// // convert user input to a number
//     var userInput = parseInt(prompt("Ok lets get started. Please enter a number:"));
//     // alert(typeof userInput);
//     if (isNaN(userInput) === false) {
//         if (userInput % 2 == 0) {
//             alert("Number is even");
//         } else {
//             alert("Number is odd");
//         }
//         var plus100 = userInput + 100;
//         alert(plus100);
//
//         if (userInput >= 0) {
//             alert("Number is positive")
//         } else {
//             alert("Number is negative")
//         }
//     } else {
//         alert("You entered something other than a number. \n\n" +
//             "To start over: \n" +
//             "1. Press OK \n" +
//             "2. Refresh page to try again.")
//     }
// } else {
//     alert("Have a nice day!")
// };




