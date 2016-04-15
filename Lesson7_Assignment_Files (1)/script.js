/*
Program Name: Recipe Display Application
Author: Casey Walters
Date: 4/15/16
Filename: index.htm
*/

//displays the next element after the current target
function display(event) {
 /* global $ */
 $(event.currentTarget).next().fadeIn("slow");

    
}//end of display

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);