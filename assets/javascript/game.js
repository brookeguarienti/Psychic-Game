// Creates an array that lists out all of the options.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creates variables to hold the number of wins, losses, remaining guesses left, and letters guessed.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesMade = [];
var userGuess = null;


// Create variables that hold references to the places in the HTML where we want to display things.
// var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesMadeText = document.getElementById("guesses-made-text");

 // Randomly chooses a choice from the options array. This is the Computer's guess.
 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

 function countGuessesLeft() {
	document.querySelector("#guesses-left-text").innerHTML = guessesLeft;
}

function farUserGuesses() {
	document.querySelector("#guesses-made-text").innerHTML = guessesMade.join(' ');
}

countGuessesLeft();

var restart = function() {
	guessesLeft = 10;
	guessesMade = [];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    guessesLeft--;

    // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessesMade.push(userGuess);
    countGuessesLeft();
    farUserGuesses();

    if (userGuess === computerGuess){
		wins++;
		document.querySelector("#wins-text").innerHTML = wins;
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#losses-text").innerHTML = losses;
		restart();
	}
  };