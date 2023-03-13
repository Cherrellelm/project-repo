//Let's play rock, paper, scissors
let playOptions = ["rock", "paper", "scissors"];
let randomOption = playOptions[Math.floor(Math.random() * playOptions.length)];

function getComputerChoice () {
    return randomOption;
    
}

let playerInput = prompt("Make your first move");
let playerSelection = playerInput;
let computerSelection = getComputerChoice();

playerSelection = playerSelection.toLowerCase();

console.log("Player Selection is " + playerSelection);
console.log("Computer Selection is " + randomOption);




function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("It's a draw, everybody wins!");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose, Paper covers Rock!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win, Rock beats Scissors!");
    }

    if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("It's a draw, everybody wins!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win, Paper covers Rock!");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose, Scissors cuts Paper!");
    }

    if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("It's a draw, everybody wins!");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose, Rock beats Scissors!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win, Scissors cuts Paper!");
    }
  }
  

  function game (){
    for (let counter = 0; counter < 5; counter++) {
        playRound(playerSelection, computerSelection);
        console.log("Player Selection is " + playerSelection);
        console.log("Computer Selection is " + randomOption);
     }
  }
  
game();


