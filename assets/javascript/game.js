
//word choices
var wordChoices = ["chicken", "squirrels", "bunnies", "sleeping", "treats", "walks", "barking", "toys", "playing", "friends",]; 
var hangmanWord = ""; 
var lettersWord = [ ]; 
var spotBlanks = 0; 
var blanksWithGuess = []; 
var wrongLetters = [];



//counter need var?
var counterWins = 0; 
var counterLosses = 0; 
var counterGuesses = 10; 
var answerArray = [];


  	function startGame () {
      hangmanWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
      lettersWord = hangmanWord.split("");
      spotBlanks = lettersWord.length;

      //each new game
      counterGuesses = 10; 
      wrongLetters = []; 
      blanksWithGuess = []; 

      //set up blankswithGuess with number of spaces
      for (var i=0; i<spotBlanks; i++){
      blanksWithGuess.push("_");
    }
//starting game - check this since my /p are white. seems wrong.       }
document.getElementById("wordToGuess").innerHTML = blanksWithGuess.join(" ");
document.getElementById("guessesLeft").innerHTML = counterGuesses;
document.getElementById("winCounter").innerHTML = counterWins;
document.getElementById("lossCounter").innerHTML = counterLosses;

  	console.log(hangmanWord);
    console.log(lettersWord);
    console.log(spotBlanks);
    console.log(blanksWithGuess);
}
function compareLetters(letter){
  

  var letterIn = false;

  for (var i=0; i<spotBlanks; i++){
    if(hangmanWord[i] == letter) {
      letterIn = true;

    }
  }
  if (letterIn) {
  for (var i=0; i<spotBlanks; i++) {
    if (hangmanWord[i] == letter) {
      blanksWithGuess[i] = letter;
    }
  }
}

//this is not working
    else {
      wrongLetters.push(letter);
      counterGuesses--

  }
console.log(blanksWithGuess);
}

 function roundDone(){
    console.log("Win Count: " + counterWins + " | Loss Count: " + counterLosses + " | Guesses Left: " + counterGuesses);

    document.getElementById("guessesLeft").innerHTML = counterGuesses;
    document.getElementById("wordToGuess").innerHTML = blanksWithGuess.join(" ");
    document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");
//won
if(lettersWord.toString() == blanksWithGuess.toString()) {
    counterWins++;
    alert(hangmanWord);
    alert("Winner; Winner; William ate your Dinner!");


//add win to counter
    document.getElementById("winCounter").innerHTML = counterWins;

    startGame();
  }

//loss
else if (counterGuesses == 0){
  counterLosses++;
  alert(hangmanWord);
  alert("LOSER! REAL BIG LOSER!");

  document.getElementById("lossCounter").innerHTML = counterLosses;

  startGame();
  }
}

startGame();

document.onkeyup = function(event) {
  var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
  compareLetters(letterGuess);
  roundDone();

  console.log(letterGuess);
}
