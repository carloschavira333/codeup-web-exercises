
// Handle An API Promise
var url = 'https://api.github.com/users';
var authKey = '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';

fetch(url,
{headers:
        {'Authorization': authKey}
}).then(response => response.json())
.then(users => {
    console.log(users)
    users.forEach( userObj => {
        // do something with each username
        // console.log('userObj.login',userObj.login);
    })
})

// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
    // JS arrow function:
    // let sum = (a, b) => a + b;
    /* This arrow function is a shorter form of:
    let sum = function(a, b) {
      return a + b;};
    */
    //
    // alert( sum(1, 2) ); // 3

let userInput = (githublogin) => {
    // Write the header of the function give meaningful names to the function and parameter
        // userInput is the name we will use to when calling back the function
        // githubUsername is what the user will enter. // example 'carloschavira333'
    // Once entered it will pull from github api
        // 1. Establish a connection
            // Set variables for url and the authentication key
    var url = 'https://api.github.com/users/';
    var authKey = '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';
            // Set up the fetch request
    fetch(url + githublogin,
                // Do your console logs
        console.log('url',url),
        console.log('githublogin',githublogin),
            // Set up the header
        {headers:
                {'Authorization': authKey}
        }).then(response => response.json())
        .then(githubUser => {
            console.log('githubUser', githubUser)
        })
}

userInput('carloschavira333')