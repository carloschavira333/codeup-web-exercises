
var userConfirm = confirm("Would you like to enter a number?");


function confirm(boolean) {

    if (userConfirm === "") {
        // convert user input to a number
        var userInput = parseInt(prompt("Ok lets get started. Please enter a number:"));
        // alert(typeof userInput);
        if (isNaN(userInput) === false) {
            if (userInput % 2 === 0) {
                alert("Number is even")
            } else {
                alert("Number is odd");
            }
            var plus100 = userInput + 100;
            alert(plus100);

            if (userInput >= 0) {
                alert("Number is positive")
            } else {
                alert("Number is negative")
            }
        } else {
            alert("You entered something other than a number. \n\n" +
                "To start over: \n" +
                "1. Press OK \n" +
                "2. Refresh page to try again.")
        }
    }

    return userConfirm;
}


confirm(userConfirm);
console.log(typeof userConfirm);