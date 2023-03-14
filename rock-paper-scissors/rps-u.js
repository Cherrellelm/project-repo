//Let's play rock, paper, scissors - The Correct Code
let playOptions = ["rock", "paper", "scissors"];
let randomOption = playOptions[Math.floor(Math.random() * playOptions.length)];

function getComputerChoice () {
    return randomOption;
}

let playerInput = prompt("Make your move! Type Rock, Paper,or Scissors");
let playerWins = "win";
let playerSelection = playerInput;
let computerSelection = getComputerChoice();

playerSelection = playerSelection.toLowerCase();


function playRound(playerSelection, computerSelection) {
    console.log("Player Selection is " + playerSelection);
    console.log("Computer Selection is " + randomOption);
    if (playerSelection == computerSelection) {
        console.log("It's a draw!");
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose, Paper covers Rock!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log(`You ${playerWins}, Rock beats Scissors!`);
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        console.log(`You ${playerWins}, Paper covers Rock!`);
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose, Scissors cuts Paper!");
    }

    if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose, Rock beats Scissors!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`You ${playerWins}, Scissors cuts Paper!`);
    }
  }
  
 let playerPoint = 1;
 let computerPoint = 1;

  function game (){
    for (let counter = 0; counter < 5; counter++) {

        if (counter => 1) {
        console.log("Round " + (counter +1))
        }

        playRound(playerSelection, randomOption);

    }
     if (playerWins.includes("win")){
        console.log("Player gets " + playerPoint + "point!" );
    }
    // else {
        //console.log("Computer gets " + computerPoint + "point!")
    //}
}

game();

//Need to figure out. howto generate random number each round
//need to add total points each time a player wins around
/*
function game (){
    for (let counter = 0; counter < 5; counter++) {

        if (counter => 1) {
        console.log("Round " + (counter +1))
        }
        let increase = 1;
        playRound(playerSelection, randomOption);

        for (let inCounter = 0; inCounter < playOptions[Math.floor(Math.random() * playOptions.length)]; inCounter++) {
            computerSelection;
            
        }
        increase++;

     if (playerWins.includes("win")){
        console.log("Player gets " + playerPoint + "point!" );
    }
    // else {
        //console.log("Computer gets " + computerPoint + "point!")
    //}
  }
}*/