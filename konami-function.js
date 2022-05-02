"use strict";
// ========== countdown logic ==========
//difficulty level function
let difficultyLevel;

$("#difficulty").on("change", function () {

        if (this.value === "beginner") {
            difficultyLevel = 7000;
        } else if (this.value === "average") {
            difficultyLevel = 5000;
        } else if (this.value === "advanced") {
            difficultyLevel = 3000;
        }
    // alert(difficultyLevel)
})


// button allows user to start game when ready
$("#start-game").click(function(){
    verifyCodeLength();
})

//function ends games and rearranges the page
function gameOver(){
    $("img").attr("src", "assets/IAoG.gif")
    $(".message").html("Looks like you didn't make it...<br>better luck next time...")
    $("#restart-button").removeClass("hidden");
    $("#directions").addClass("hidden");
}

// allows the user to refresh the game when the button is clicked
function refreshPage(){
    window.location.reload();
}

// disables the movement caused by hitting the arrow keys
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

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
    let gameTime = setTimeout(gameOver, difficultyLevel);

    if (potentialCode.length === 10 && JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
            clearTimeout(gameTime);
            $(".message").html("Congratulations you survived! For now... <br> If you enjoyed this game check out the code at: <br> <a href='https://github.com/Sarguello12' target='_blank''>github.com/Sarguello12</a> ");
            $("#restart-button").removeClass("hidden");
            $("#directions").addClass("hidden");
        }
    }

// function runs code to verify array input when enter is pressed
$(document).keyup(function(e){
    if(e.keyCode === 13){
        verifyCodeLength(userInput);
    }
})

//difficulty level function


    // $("#difficulty").on("change", function () {
    //     // alert(this.value);
    //     if (this.value === "Beginner") {
    //         return 7000;
    //     } else if (this.value === "Average") {
    //         return 5000;
    //     } else if (this.value === "Advanced") {
    //         return 3000;
    //     }
    // })