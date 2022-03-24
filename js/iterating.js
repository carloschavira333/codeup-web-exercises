(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
        var names = ['Name1','Name2','Name3','Name4'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
        console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("Elements of array being called by index");
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log("Elements of array being called by index with a loop");
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    console.log("names inside a forEach")
    names.forEach(function (nameOfPerson){
        console.log(nameOfPerson)
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    console.log("Todo with 3 exercises")
    var set1 = [1, 2, 3, 4, 5];
    var set2 = [1, 2, 3, 4, 5];
    var set3 = [1, 2, 3, 4, 5];

    function first(set1) {
        console.log("First index " + set1[0])
    }
    first(set1)

    function second(set2) {
        console.log("Second index " + set2[1])
    }
    second(set2)

    function last(set3) {
        console.log("Last index " + set3[4])
    }
    last(set3)



})();