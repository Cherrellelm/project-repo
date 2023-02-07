// Playing a game - ROCK PAPER SCISSORS
// Human vs Computer

// Human choice is set in code
let humanInput = "scissors";

let humanChoice;
let computerChoice;

let continueGame = true; //flag

humanInput = humanInput.toUpperCase();

// convert human choice string to a number
if (humanInput == "ROCK") {
    humanChoice = 1;
}

if (humanInput == "PAPER") {
    humanChoice = 2;
}

if (humanInput == "SCISSORS") {
    humanChoice = 3;
}

while (continueGame == true) {

    computerChoice = getRandomNumber(1, 3);

    console.log(`human choice ${humanChoice}`)
    console.log(`computer choice ${computerChoice}`)

    if (humanChoice == computerChoice) {
        console.log("The game is a DRAW");
    }

    // Human chooses ROCK (1) and Computer chooses SCISSORS (3), HUMAN WINS
    if (humanChoice == 1 && computerChoice == 3) {
        console.log("Human wins !!!");
        continueGame = false;
    } else if (humanChoice > computerChoice) {
        console.log("Human wins !!!");
        continueGame = false;
    } else if (computerChoice > humanChoice) {
        console.log("Computer wins :( ");
        continueGame = false;
    }

}

// ======= FUNCTIONS ARE BELOW ======== //

function getRandomNumber(min, max) {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}


// Computer will respond with a choice

// Apply rules: Who wins

// Need to ensure the values are case insensitive "ROCK" "rock" "rOCk"
// Compare values using IF

// Important: If there is a TIE, please continue the game

// Display the winner