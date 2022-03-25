
// todo: 2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
// For example, showMultiplicationTable(7) should output
// 7 x 1 = 7
// through
// 7 x 10 = 70

// function showMultiplicationTable(n) {
//
//     for (var i = 0; i < 11; i++) {
//         var result = n * i;
//         console.log(n + " X " + i + " = " + result);
//     }
// }
// showMultiplicationTable(2);

// 3. todo: Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...



// for (var x=0; x<=9; x++) {
//     var randomNum = Math.floor(Math.random() * (200 - 20)) + 20;
//
//     if (randomNum % 2 === 0) {
//         console.log(randomNum + " is Even")
//     } else {
//         console.log(randomNum + " is Odd")
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
// The below for loop also produces the expected results
// for (var i = 1; i<=9; i++){
//     console.log((i + "").repeat(i))}

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

// for (var i = 100; i > 0; i -= 5) {
//         console.log(i)
// }

// TODO Do While Loop
// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

// This is how you get a random number between 50 and 100
// function coneStore() {
    var coneInventory = Math.floor(Math.random() * 50) + 50;
    console.log("total" + coneInventory)

    do {
        var amtBought = Math.floor(Math.random() * 5) + 1;
        coneInventory = coneInventory - amtBought;
        // console.log("coneInventory" + coneInventory)
        // console.log("amtBought" + amtBought)

    } while (coneInventory >= 6)

    // do {
        var nextDayCones = prompt("Enter a number:")
        if (coneInventory > nextDayCones) {
            //if coneInventory is greater than nextDayCones then I have enough to sell
            console.log(nextDayCones + " ")
            // line 127 string to read more like 130
        } else if (coneInventory < nextDayCones) {
            console.log("Cannot sell you " + nextDayCones + " cones I only have " + coneInventory + " left.")
        } else {
            console.log("Yay! I sold them all!")
        }
    // } while ()


// }

coneStore()


// Good as of 940pm
// This is how you get a random number between 50 and 100
// function coneStore() {
//     var coneInventory = Math.floor(Math.random() * 50) + 50;
//     console.log("total" + coneInventory)
//
//     do {
//         var amtBought = Math.floor(Math.random() * 5) + 1;
//         // var amtBought = prompt("enter a number");
//
//         coneInventory = coneInventory - amtBought;
//         console.log("coneInventory" + coneInventory)
//         console.log("amtBought" + amtBought)
//
//     } while (coneInventory >= 6)
//     var nextDayCones = prompt("Enter a number:")
//     if (coneInventory > nextDayCones) {
//         console.log(nextDayCones + " cones sold")
//     } else if (coneInventory < nextDayCones) {
//         console.log("Cannot sell you " + nextDayCones + " cones I only have " + coneInventory + " left.")
//     } else {
//         console.log("Yay! I sold them all!")
//     }
// }
//
// coneStore()