

// Write a javascript function that accepts the 3 lengths of a triangle and outputs the triangle’s area.

// Two Inputs: Base * Height divided by 2
/*var baseValue = 5;
var heightValue = 5;

function triangle(base, height) {
    return (base * height) / 2;
}

console.log(triangle(baseValue, heightValue));*/

// Three inputs: Side a, b, c
// Write a javascript function that accepts the 3 lengths of a triangle and outputs the triangle’s area.

/*var sideA = 5;
var sideB = 5;
var sideC = 5;

function triangle2(a, b, c) {
    return a * b * c;
}

console.log(triangle2(sideA, sideB, sideC));*/

// Imagine the supplied array is like a pack of cards. Write a function to shuffle an array in to a completely new and entirely random order, much like shuffling a pack of cards.
//     example input: [2,4,6,8]
// expected output: [4,2,8,6];

/*var numbersArray = [2, 4, 6, 8];

function shuffArr() {
    for (var i = numbersArray.length -1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var temp = numbersArray[i];
        numbersArray[i] = numbersArray[j];
        numbersArray[j] = temp;
    }
    return numbersArray
}
console.log(shuffArr())*/

// 1. Return a string in reverse
// ex. reverseString(‘hello’) === ‘olleh’
// let reverseString = (str) => {
//     return //Something
// };
// 2. Return true if palindrome and false if not
//     ex. isPalindrome(‘racecar’) === ‘true’, isPalindrome(‘hello’) == false
// let isPalindrome = (str) => {
// };

// function reverseString(string) {
//     return string.split('').reverse().join('')
// }
// console.log(reverseString('Hello'));
//
// function isPalindrome(a) {
//
// }
// console.log(isPalindrome('hello'))

////////////////////////////////////////////////////////////
//1. Create a variable to be used as the max value for the number guessing game.

// var max = 5;

// Generate a random number for the solution using Math.random() and Math.floor(). You will also need to add 1 so that the value is returned as 1 - [whatever the set max value is]. You can log this value to the console for the development to see the value as you create the game, then when the game is complete you can comment out this console input.

// var ranNumber = Math.floor(Math.random() * max) + 1;

// Create a variable that will be used for tracking whether the answer is correct or not and set it to a default Boolean value of false. We can update it to be true if the user guess is a match.

// var correct = false;

// Use a while loop to iterate a prompt that asks the user to enter a number between 1 and 5, and convert the response into a number in order to match the data type of the random number.



// Inside the while loop, check using a condidtion to see if the prompt value is equal to the solution number. Apply logic such that if the number is correct, you se the status to true and break out of the loop. Provide the player with some feedback as to whether the guess was high or low, and initiate another prompt until the user guesses correctly. In this way we use the loop to keep asking until the solution is correct, and at that point we can stop the iteration of the block of code.

// function Book(type, author) {
//     this.type = type;
//     this.author = author;
//     this.getDetails = function () {
//         return this.type + " written by " + this.author;
//     }
// }
//
// var book = new Book("Fiction", "Peter King");
//
// console.log(book.getDetails());        // => Fiction written by Peter King


// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }];

// for (var i = 0; i < library.length; i++) {
//     if (library[i].readingStatus === true) {
//         var readingIsTrue = library[i].title;
//         console.log("This title is available", readingIsTrue);
//     } else {
//         console.log("book title not available " + library[i].title);
//     }
// }


// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calcualted 50 primes.
// https://en.wikipedia.org/wiki/Prime_number

// function primeNumbers(input) {

//     var storage = [];
//     var i;
//     var j;
//     var primes = [];

//     for (i = 2; i <= input; ++i) {
//         if (!storage[i]) {
//             console.log(!storage[i]);
//             primes.push(i);
//             for (j = i << 1; j <= input; j += i) {
//                 storage[j] = true;
//                 console.log('storage[j]', storage[i])
//             }
//         }
//     }
//     console.log('Storage: Holds the output of the first for loop', storage.length)
//     console.log('Primes: Hold the output of the second for loop', primes.length)
//     console.log(primes)

//     return primes;
// }

// console.log(primeNumbers(50));


// Self practice

// Write a JS function that takes in a number and reverses it.

function reverseNumber(input) {
    input = input + "";
    return input.split("").reverse().join("");
}

console.log(reverseNumber(589))
