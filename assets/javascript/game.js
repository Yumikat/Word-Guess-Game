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
$("#remaining-text").text(remaining);

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);

    if (remaining > 0) {
        for (var j = 0; j < letters.length; j++) {
        if(userGuess !== letters[j]) {
            remaining--;
            console.log(remaining);
            $("#remaining-text").text(remaining);
            guessList.push(userGuess);
            $("#guesses-text").text(guessList);

        } else // (userGuess === letters[j]) 
        {
            for (var i = 0; i < wordpicked.length; i++) {
                var correctLetter = userGuess;

                
                console.log(correctLetter);
            }
        }
    }
}
if (remaining === 0) {
    remaining = 13;
    function empty () {
        guessList.length = 0;
    }
    empty();
    $("#guesses-text").text = "";
    wordpicked = words[Math.floor(Math.random() * words.length)];
console.log(wordpicked);
alert("Sorry, you lost, try again!!!");
}
    



}

