// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
// } else {
//     alert("Operation Canceled!");
// }
//
// console.log(typeof weShouldDeleteStuff);
// console.log(weShouldDeleteStuff);

// running this code in console asks us to confirm.
// If "ok" is selected then weShouldDeletStuff gets set to true
// If "cancel" is selected then weShouldDeletStuff gets set to false

//***************************

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }
//
// console.log(pizzaPreference);

//***************************
// Ternary Operator (shorhand if/else)
// var message;
//
// if (success) {
//     message = "Operation was successful";
// } else {
//     message = "Oops, something went wrong.";
// }

// var message = (success) ? "Operation was successful." : "Oops, something went wrong.";

//Switch Statement

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }

// TODO: write a conditional that prints "hey, she's my instructor" to the
//  console if the name provided is "Laura", but if the name provided
//  is "Kenneth", print out "oh, he's my instructor too!", if the name
//  is neither Laura nor Kenneth, print out "um I don't know them"

// var instructor = prompt("Who is your instructor?");
//
// if(instructor === "Laura") {
//     console.log("She is my instructor");
//
// } else if (instructor === "Ken"){
//     console.log("He is my instructor too. ");
// } else {
//     console.log("um I don't know them")
// };

// Write a fn
// assign input
//return
// string "passing" if grade is above 70
// string "failing" if grade is below 70
//call the function
//pass in the argument (grade)

function isPassing(studentGrade) {
    var result = "";

    if(studentGrade > 70) {
        result = "passing";
    } else {
        result = "failing";
    }
    return result;
};

console.log(isPassing(78));
