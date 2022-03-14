// var name = "Carlos";
// var school = "CodeUp";
// var favCode = "JS";
//
// console.log(name, school, favCode);
// console.log("My name is", name);

alert("Welcome to my Website!")
var favColor = window.prompt("What is your favorite color?");
alert("Great! " + favColor + " is also my favorite color!");

//Exercise 3
// Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
//     You have rented some movies for your kids:
//     The little mermaid (for 3 days),
//     Brother Bear (for 5 days, they love it), and
//     Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
var cost = 3;
var littleMermaid = prompt("How many days are you renting Little Mermaid?");
var brotherBear = prompt("How many days are you renting Brother Bear?");
var hercules = prompt("How many days are you renting Hercules?");
var totalRentalCost = (littleMermaid * cost) + (brotherBear * cost) + (hercules * cost);

alert("Total cost for the rentals is: $" + totalRentalCost);
alert("Thank you for renting with us. Have a nice day!")

//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
var google = prompt("Enter number of hours worked this week at Google: ");
var amazon = prompt("Enter number of hours worked this week at Amazon: ");
var facebook = prompt("Enter number of hours worked this week at Facebook: ");
var totalPay = (google * 400) + (amazon * 380) + (facebook * 350);
alert("Total pay for this week: $" + totalPay);


// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

var classAvailable = prompt("Is class available? (Yes or No)");
var classConflict = prompt("Do you have a conflict? (Yes or No)");

if (classAvailable == "Yes" && classConflict == "Yes") {
    alert("This class is available.");
} else {
    alert("This class is not available.");
}

//     A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
alert("This is exercise #3")
var itemsPurchase = prompt("Enter items purchased");
var offerExpired = prompt("Are you purchasing the product today?");
var isPremium = prompt("Are you a premium member?");

if (itemsPurchase > 2 && offerExpired == "Yes" && isPremium == "Yes") {
    alert("Purchase qualifies for product offer.");
} else {
    alert("Purchase does not qualify for offer.");
}