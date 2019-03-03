//Array for the questions and answers for game
var words = [
    "mountains",
    "snow",
    "seasons",
    "traffic",
    "hiking",
    "skiing",
    "snowboarding"
];

var wins = 0;
var remaining = 13;
var guessList = [];
var letters = [];

var wordpicked = words[Math.floor(Math.random() * words.length)];
console.log(wordpicked);

letters.push(wordpicked);
console.log(letters);


for (var i = 0; i < wordpicked.length; i++) {
    var wordTextDiv = (" _ ");
    console.log(wordTextDiv);
    $("#word-text").append(wordTextDiv);
}

// var remainingText = $("remaining-text");
// var guessesText = $("guesses-text");

$("#wins-text").text(wins);

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);
}

