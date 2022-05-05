"use strict";

function startGame(difficultyLevel, userInput, konamiCode){
    const gameTimer = setTimeout(function(){ gameOver(); }, difficultyLevel);

    $(document).keyup(function(e) {
        if (e.keyCode === 13 && verifyCode(userInput, konamiCode) === true) {
            clearTimeout(gameTimer)
            gameWin();
        }
    })
}

function verifyCode(array1, array2) {
    if (array1.length === array2.length) {
        return array1.every((element, index) => {
            if (element === array2[index]) {
                return true;
            }
            return false;
        });
    }
    return false;
}

function gameWin(){
    $(".message").html("Congratulations you survived! For now... <br> If you enjoyed this game check out the code at: <br> <a href='https://github.com/Sarguello12' target='_blank''>github.com/Sarguello12</a> ");
    $("#restart-button").removeClass("hidden");
    $("#directions").addClass("hidden");
}

function gameOver(){
    $("img").attr("src", "assets/IAoG.gif")
    $(".message").text("Looks like you didn't make it...<br>better luck next time...")
    $("#restart-button").removeClass("hidden");
    $("#directions").addClass("hidden");
}





let difficultyLevel = 5000;
$("#difficulty").on("change", function () {

        if (this.value === "beginner") {
            difficultyLevel = 7000;
        } else if (this.value === "average") {
            difficultyLevel = 5000;
        } else if (this.value === "advanced") {
            difficultyLevel = 3000;
        }
})

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


$("#start-game").click(function(){
    startGame(difficultyLevel, userInput, konamiCode);
})
