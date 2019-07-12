// declaring array of user/computer choices
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// setting variables to keep count of the wins/losses
let wins = 0;
let losses = 0;

// holds the amount of guesses the user has left
let guessesLeft = 9;

// holds the users input
let userGuessArray = [];

// sets variable to hold a random letter from the 'letters' array
let randLetter = letters[ Math.floor ( Math.random() * letters.length ) ];

// set variables to reference the classes we'd like to modify in the HTML
let winsText = document.querySelector(".win");
let lossText = document.querySelector(".lose");
let guessesLeftText = document.querySelector(".guessesLeft");
let userGuessText = document.querySelector(".usersGuess");

// updates the HTML with # of wins
function win() {
    wins++;
    winsText.innerHTML = "Wins : " + wins;
}

// updates the HTML with the # of losses
function lose() {
    losses++;
    lossText.innerHTML = "Losses : " + losses;
}

// updates the HTML with # of guesses the user has left
function guessesLeftHTML() {
    guessesLeftText.innerHTML = "Guesses left : " + guessesLeft;
}

// updates the HTML with a list of letters the user has guessed
function userGuessHTML() {
    userGuessText.innerHTML = "Your guesses so far are : " + userGuessArray.join(", ");
}

// resets the game to original state without refreshing the page
function reset() {
    randLetter = letters[ Math.floor ( Math.random() * letters.length ) ];
    guessesLeft = 9;
    userGuessArray = [];
    guessesLeftHTML();
    userGuessHTML();
}


// function that runs whenever a key is pressed
document.onkeyup = function(event) {

    // decreases the amount of guesses the user has left every time a key is pressed
    guessesLeft -= 1;

    // grabs the users guess and converts it to string/lowercase
    let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // puts the users guess into an array
    userGuessArray.push(userGuess);

    // function is called to display current guesses left
    guessesLeftHTML();

    // function displays the users input
    userGuessHTML();

    // checks to see if the key pressed is a lowercase letter
    // if it is, it determines whether or not the player won/lost
    // else an alert box will pop up prompting the user to press the right key
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        if (userGuess === randLetter) {
            win();
            reset();
        } 
        if (guessesLeft === 0) {
            lose();
            reset();
        }
    } else {
        reset();
        alert("Please enter a lowercase letter");
    }
}