//Let's play rock, paper, scissors - The Correct Code
let playOptions = ["rock", "paper", "scissors"];

let playerInput = prompt("Make a choice, choose rock, paper, or scissors!");
let playerPoint = 0;
let computerPoint = 0;
let playerSelection = playerInput;
let computerSelection = playOptions[Math.floor(Math.random() * playOptions.length)];

let playBtn = document.querySelector("#playBtn");

playerSelection = playerSelection.toLowerCase();



function playRound(playerSelection, computerSelection) {
    console.log("Player Selection is " + playerSelection);
    console.log("Computer Selection is " + computerSelection);

    if (playerSelection == computerSelection) {
        console.log("It's a draw!");
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose, Paper covers Rock!");
        computerPoint++;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win, Rock beats Scissors!");
        playerPoint++;
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win, Paper covers Rock!");
        playerPoint++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose, Scissors cuts Paper!");
        computerPoint++;
    }

    if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose, Rock beats Scissors!");
        computerPoint++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win, Scissors cuts Paper!");
        playerPoint++;
    }
  }
  
  function gameRepeat (){
    for (let counter = 0; counter < 5; counter++) {

        if (counter => 1) {
        console.log("Round " + (counter +1));
        }

        playRound(playerSelection, computerSelection);
        computerSelection = playOptions[Math.floor(Math.random() * playOptions.length)];
    }

    console.log(`Player score = ${playerPoint} | Computer score = ${computerPoint}`)
    if (playerPoint > computerPoint) {
        console.log("You win the game!"); 
    } 
    if (playerPoint < computerPoint) {
        console.log("Sorry you lose, try again!");
    } 
    if (playerPoint == computerPoint) {
        console.log("It's a draw, play again!");
    } 
}

gameRepeat();
//<input></input>
