var level = 0;
var userClickPatterns = [];

function randomNumber() {
    return Math.floor(Math.random() * 4);
}

var buttonColors = ["red", "blue", "green", "yellow"];

var randomChosenColor = "";
var gamePattern = [];

// events
$(document).on("keypress", function () {
    firstStart();
    buttonsOn();
});

function buttonsOn() {
    $(".btn").on("click", function () {
        btnClick = 0;
        var userChosenColor = $(this).attr("id");
        userClickPatterns.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer(userClickPatterns.length);
        console.log(userClickPatterns);
    });
}
// main functions
function firstStart() {
    nextSequence();
    $(document).off("keypress");
}

function checkAnswer(length) {
    for (var i = 0; i < length; i++) {
        if (gamePattern[i] != userClickPatterns[i]) {
            failed();
            startOver();
            return;
        }
    }
    if (level == userClickPatterns.length) {
        userClickPatterns = [];
        setTimeout(nextSequence, 1000);
    }
}

function nextSequence() {
    randomChosenColor = buttonColors[randomNumber()];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
    $(".btn#" + randomChosenColor)
        .fadeOut(100)
        .fadeIn(100);
    playSound(randomChosenColor);
    level++;

    $("h1").text("Level " + level);
}

function failed() {
    $(".btn").off("click");
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 150);
    var audio = new Audio("assets/sounds/wrong.mp3");
    audio.play();
}

function startOver() {
    $("h1").text("Failed. Press any key to start over again.");
    level = 0;
    userClickPatterns = [];
    gamePattern = [];
    $(document).on("keypress", function () {
        firstStart();
        buttonsOn();
    });
}

// helper functions
function playSound(color) {
    var audio = new Audio("assets/sounds/" + color + ".mp3");
    audio.play();
}

function animatePress(color) {
    $("#" + color).addClass("pressed");
    setTimeout(function () {
        $("#" + color).removeClass("pressed");
    }, 100);
}