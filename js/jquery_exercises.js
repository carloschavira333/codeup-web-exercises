// ****************************************
// ****************************************
// Intro to jQuery Exercise
// ****************************************
// ****************************************
// $(document).ready(function () {
//     alert('The DOM has finished loading');
// });

// ****************************************
// ****************************************
// jQuery Selectors Exercise
// ****************************************
// ****************************************

// Id Selectors
// ✅ 1. Create content in your HTML file using at least the following elements: h1, p, ul, li, div.
// ✅ 2. Add several attributes to your elements; you will need both id and class attributes.
// ✅ 3. Use jQuery to select an element by the id. Alert the contents of the element.
// ✅ 4. Update the jQuery code to select and alert a different id.
// ✅ 5.  Use the same id on 2 elements. How does this change the jQuery selection? The jQuery only returned the first element with the duplicate ID.
// ✅ 6. Remove the duplicate id. Each id should be unique on that page.

// This code starts question 3
// var headingOne = $('#heading-one').html();
// console.log(headingOne);
// alert(headingOne);
// This code ends question 3

// This code starts question 4
// var paragrpahOne = $('#paragraph-one').html();
// console.log(paragrpahOne);
// alert(paragrpahOne);
// This code ends question 4

// This code starts question 4
// var divOne = $('#div-one').html();
// console.log(divOne);
// alert(divOne);
// This code ends question 4

// Class Selectors
// ✅ 1. Remove your custom jQuery code from previous exercises.
// ✅ 2. Update your code so that at least 3 different elements have the same class named codeup.
// ✅ 3. Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
// ✅ 4. Remove the class from one of the elements. Refresh and test that the border has been removed. Completed. Removed the class and the border was removed as expected.
// ✅ 5. Give another element an id of codeup. Does this element get a border now? It does not receive styling as expected.

// $('.codeup').css({'border' : '1px solid red'});

//**************************************************************
//**************************************************************
//**************************************************************

// Element Selectors
// ✅ 1. Remove your custom jQuery code from previous exercises.
// ✅ 2. Using jQuery, set the font-size of all li elements to 20px.
// ✅ 3. Craft selectors that highlight all the h1, p, and li elements.
// ✅ 4. Create a jQuery statement to alert the contents of your h1 element(s).

// $('.li-font').css({'font-size': '20px'});
//
// $('#heading-one').css({'background-color' : 'yellow'});
// $('#paragraph-one').css({'background-color' : 'yellow'});
// $('#div-one').css({'background-color' : 'yellow'});
//
var headingOne = $('.codeup').html();
console.log(headingOne);
alert(headingOne);

// Multiple Selectors
// ✅ 1. Combine your selectors that highlight all the h1, p, and li elements.

// $('#heading-one, #paragraph-one, #div-one').css({'background-color' : 'yellow'});

//**************************************************************
//**************************************************************
//**************************************************************

// Mouse Events Exercises
// ✅ 1. Use the file jquery_exercises.html for these exercises. Commit your changes to GitHub.
// ✅ 2. Remove your custom jQuery code from previous exercises.
// ✅ 3. Add jQuery code that will change the background color of an h1 element when clicked.
// ✅ 4. Make all paragraphs have a font size of 18px when they are double clicked.
// ✅ 5. Set all li text color to red when the mouse is hovering; reset to black when it is not.

$('#heading-one').click(function () {
    $(this).css('background-color', 'yellow')
    })
    $('p').dblclick(function () {
        $(this).css('font-size', '18px')
    });
    $('li').hover(function () {
        $(this).css('color', 'red')
    },
        function (){
        $(this).css('color', 'black')
    });

