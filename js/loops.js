
// 2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
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

// 3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
//
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

randomNum = Math.floor(Math.random()* 30);

for (var x=0; x<=9; x++) {
    // console.log(x * randomNum+20)
    var xPlusRandom = (x * randomNum+20)

    if ( xPlusRandom % 2 === 0) {
        console.log(xPlusRandom + " is Even")
    } else {
        console.log(xPlusRandom + " Number is odd")
    }
};

// console.log(xPlusRandom)