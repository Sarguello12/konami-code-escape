"use strict";

// ========== konami code logic ==========

// up = 38
// down = 40
// left = 37
// right 39
// b = 66
// a = 65

// complete konami code array
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

// array that holds the konami code
let userInput = [];

// records the keyboards inputs if they are characters of the konami code
$(document).keyup(function(e){
    switch(e.keyCode){
        case 38:
            userInput.push(38);
            break;
        case 40:
            userInput.push(40);
            break;
        case 37:
            userInput.push(37);
            break;
        case 39:
            userInput.push(39);
            break;
        case 66:
            userInput.push(66);
            break;
        case 65:
            userInput.push(65);
            break;
    }
})

// function takes in the array of potential code and checks the length of characters and if the characters match the characters of the konami code
function verifyCodeLength(potentialCode){
    if (potentialCode.length === 10){

        }
    }


// function runs code to verify array input when enter is pressed
$(document).keyup(function(e){
    if(e.keyCode === 13){
        verifyCodeLength(userInput);
    }
})