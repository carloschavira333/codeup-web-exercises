
"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
     name = "carlos";
    return "Hello " + name;
};
console.log(sayHello(name));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 */

sayHello('Carlos');
var helloMessage = name;
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = 'Carlos';

sayHello(myName);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/** TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a different result everytime you refresh the page if you are using the random number)*/

function isTwo(num) {
    if (num === 2) {
        alert("The random number was not 2");
    } else {
        alert("The random number is 2");
    }
};

isTwo(random);
console.log(random);

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 Note: I combined the next TODO with this todo.
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip.
 */
alert("You have have finished your meal and the waiter brings you your bill.")
var bill = prompt("Enter bill amount: ");
var tip = prompt("Enter tip percent");
var fifteenPercentTip = bill  * .15;

function calculateTip() {
    var totalWithTip = bill * tip/100;
    desiredTip();
    return totalWithTip;
};

function desiredTip() {
    if ( tip < 15) {
        alert("You tipped less than 15%. Please consider tipping $" + fifteenPercentTip);
    } else {
        alert("You tipped the desired amount of 15%");
    };
};
calculateTip();

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1).
 * It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

var originalPrice = prompt("Enter item price:");
var discountPercent = .3;

function applyDiscount(originalPrice, discountedPercent) {
    return originalPrice - (originalPrice * discountedPercent);
};

console.log(applyDiscount(originalPrice, discountPercent));