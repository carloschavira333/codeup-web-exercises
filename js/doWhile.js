
/* Do While Loop
An ice cream seller can't go home until she sells all of her cones.

1. (done) First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop.

2. (done) Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
    Write a do while loop
    random # btwn 1 and 5 inside of this loop

3. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.
    print out how many cones are sold

    Expected result:
    5 cones sold...  // if there are enough cones //  purchasedCones + " cones sold";
        if allCones is greater than purchasedCones then "# cones sold"
    Cannot sell you 6 cones I only have 3...  // If there are not enough cones       // "Cannot sell you " + purchasedCones + " I only have " + origInventory.
        if allCones is less than purchasedCones then "Can not sell you # cones I only have #"

    Yay! I sold them all! // If there are no more cones // origInventory
*/

// This is how you get a random number between 50 and 100
var origInventory = Math.floor(Math.random() * 50) + 50;

do {
    console.log(origInventory);

    // This expression will generate a random number between 1 and 5
    var purchasedCones = Math.floor(Math.random() * 5) + 1;
    console.log(purchasedCones)

    // check to see if I have enough // booleans conditionals
    if(origInventory == 0){
        console.log(" Yay! I sold them all!")
    } else if(purchasedCones > origInventory){
        console.log("Cannot sell you " + purchasedCones + " I only have " + origInventory)
    } else {
        console.log(purchasedCones + " cones sold.")
        origInventory = origInventory - purchasedCones
        console.log(purchasedCones + " cones purchased")
    }
console.log(origInventory)
}
while (origInventory >= 0)

// ***************** Met with Laura for one-on-one. Made progress.


