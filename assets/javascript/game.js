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
var word = [];

var wordpicked = words[Math.floor(Math.random() * words.length)];
console.log(wordpicked);
wordpicked.length;
letters.push(wordpicked);
console.log(letters);

for (var i = 0; i < wordpicked.length; i++) {
    var wordTextDiv = (" _ ");
    console.log(wordTextDiv);
    // $("#word-text").append(wordTextDiv);
    word.push(wordTextDiv);
    //console.log(word);
}

// var remainingText = $("remaining-text");
// var guessesText = $("guesses-text");

$("#wins-text").text(wins);
$("#remaining-text").text(remaining);
$("#word-text").text(word);

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);

    if (remaining > 0) {
       
        // for (var j = 0; j < wordpicked.length; j++) {
        // if(userGuess !== wordpicked[j]) {
        //     remaining--;
        //     console.log(remaining);
        //     $("#remaining-text").text(remaining);
        //     guessList.push(userGuess);
        //     $("#guesses-text").text(guessList);

        // } else {
        var found = false;
         for (var l = 0; l < wordpicked.length; l++) {
            // console.log(letters[l]); 
            // console.log(l); 
            if (userGuess == wordpicked[l]) {
               found = true;
                word[l] = userGuess;
            }
         } 
         if (found == false) {
            remaining--;
                console.log(remaining);
                $("#remaining-text").text(remaining);
                guessList.push(userGuess);
                $("#guesses-text").text(guessList);
         }

        found = false;
        
         for (var l = 0; l < word.length; l++) {

             if (word[l] == wordTextDiv) {
                found = true;
             }
        }
        if(found == false){

            wordpicked = words[Math.floor(Math.random() * words.length)];
            console.log(wordpicked);
            wins++;
           $("#wins-text").text(wins);
           empty();
        }
       
         $("#word-text").text(word);

         }

if (remaining == 0) {
    remaining = 13;

    $("#guesses-text").text = "";
    wordpicked = words[Math.floor(Math.random() * words.length)];
console.log(wordpicked);
alert("Sorry, you lost, try again!!!");
empty();
$("#word-text").text(word);
}

}

function empty () {
    guessList.length = 0;
    $("#guesses-text").text = "";
    letters.length = 0;
    word.length = 0;
    for (var i = 0; i < wordpicked.length; i++) {
         word.push(wordTextDiv);
     } 
}
    

