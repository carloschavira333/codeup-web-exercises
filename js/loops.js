
// todo: 2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
// For example, showMultiplicationTable(7) should output
// 7 x 1 = 7
// through
// 7 x 10 = 70
// function showMultiplicationTable(n) {
//     console.log(n + " x 1 = " + n * 1);
//     console.log(n + " x 2 = " + n * 2);
//     console.log(n + " x 3 = " + n * 3);
//     console.log(n + " x 4 = " + n * 4);
//     console.log(n + " x 5 = " + n * 5);
//     console.log(n + " x 6 = " + n * 6);
//     console.log(n + " x 7 = " + n * 7);
//     console.log(n + " x 8 = " + n * 8);
//     console.log(n + " x 9 = " + n * 9);
//     console.log(n + " x 10 = " + n * 10);
// }
// showMultiplicationTable(1);

// 3. todo: Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

// randomNum = Math.floor(Math.random()* 30);
//
// for (var x=0; x<=9; x++) {
//     // console.log(x * randomNum+20)
//     var xPlusRandom = (x * randomNum+20)
//
//     if ( xPlusRandom % 2 === 0) {
//         console.log(xPlusRandom + " is Even")
//     } else {
//         console.log(xPlusRandom + " Number is odd")
//     }
// };

// todo Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// for (var i = 1; i <= 9; i++) {
// if (i === 1) {
//     console.log(1)
// } else if (i === 2) {
//     console.log(22)
// } else if (i === 3) {
//     console.log(333)
// } else if (i === 4) {
//     console.log(4444)
// } else if (i === 5) {
//     console.log(55555)
// } else if (i === 6) {
//     console.log(666666)
// } else if (i === 7) {
//     console.log(7777777)
// } else if (i === 8) {
//     console.log(88888888)
// } else if (i === 9) {
//     console.log(999999999)
// }
//
// };

// todo Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for (var i = 100; i > 0; i -= 5) {
        console.log(i)
}

/* todo:  Break and Continue
Create a file named break_and_continue.js in the js directory.
    Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
    Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
    Your output should look like this:
Number to skip is: 27

Here is an odd number: 1
Here is an odd number: 3
Here is an odd number: 5
Here is an odd number: 7
Here is an odd number: 9
Here is an odd number: 11
Here is an odd number: 13
Here is an odd number: 15
Here is an odd number: 17
Here is an odd number: 19
Here is an odd number: 21
Here is an odd number: 23
Here is an odd number: 25
Yikes! Skipping number: 27
Here is an odd number: 29
Here is an odd number: 31
Here is an odd number: 33
Here is an odd number: 35
Here is an odd number: 37
Here is an odd number: 39
Here is an odd number: 41
Here is an odd number: 43
Here is an odd number: 45
Here is an odd number: 47
Here is an odd number: 49*/

