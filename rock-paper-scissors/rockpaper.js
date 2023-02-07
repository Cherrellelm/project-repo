//playing a game - Rock Paper Scissors
//Human vs Computer

//Human choice is set in code
let humanInput = "scissors";

let humanChoice;
let computerChoice;

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
computerChoice = getRandomNumber(1,3);
console.log(`computer choice ${computerChoice}`);
console.log(`human choice ${humanChoice}`);

if (humanChoice == computerChoice) {
    console.log("The game is a draw");
}

if (humanChoice > computerChoice) {
    console.log("Human wins!!!")
}

if (computerChoice > humanChoice) {
    console.log("Computer wins!!!")
}

    
    function getRandomNumber(min, max){
        let randomNumber;
        randomNumber = Math.floor(Math.random() * (max - min + 1 ) + min);
        return randomNumber;
    }
