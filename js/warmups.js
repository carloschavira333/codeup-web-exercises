

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

function reverseString(string) {
    return string.split('').reverse().join('')
}
console.log(reverseString('Hello'));

function isPalindrome(a) {

}
console.log(isPalindrome('hello'))

// objects notes
var car = {
    year: 2020,
    make: "honda",
    model: "fit",
    has4Wheels: true,
    leather: true,
    wheels: 4,
    doors: 2,
    stereo: false,
    radioStations: [104.5, 95.1,101.1,"wrr", 105.3,"kntu",96.1]
}

console.log('I drive a ' + car.make + ' and I like to listen to ' + car.radioStations[0] + ' and ' + car.radioStations[1]  +' station.')

/// I drive a _____ and I like to listen to ___ station and ____ station.

// objects notes
var aboutMe = {
    birthYear: 1974,
    firstName: "carlos",
    returnByear: function () {
        return this.birthYear + 10;
    }
}
console.log(aboutMe.returnByear());

