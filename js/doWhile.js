
/* Do While Loop
An ice cream seller can't go home until she sells all of her cones.

1. (done) First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop.

2. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
    Write a do while loop
    random # btwn 1 and 5 inside of this loop

3. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.
    print out how many cones are sold

    Expected result:
    5 cones sold...  // if there are enough cones
        if allCones is greater than purchasedCones then "# cones sold"
    Cannot sell you 6 cones I only have 3...  // If there are not enough cones
        if allCones is less than purchasedCones then "Can not sell you # cones I only have #"

    Yay! I sold them all! // If there are no more cones
*/

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones);
// This expression will generate a random number between 1 and 5
var purchasedCones = Math.floor(Math.random() * 5) + 1;
console.log(purchasedCones)
var conesLeft = allCones - purchasedCones;

do {
    conesLeft++;

        console.log(conesLeft + " cones remaining")
        console.log(purchasedCones + " cones purchased")

}
while (allCones > conesLeft)

// pausing here to reach out for a one-on-one




