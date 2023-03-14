//Let's play rock, paper, scissors - The Correct Code
let playOptions = ["rock", "paper", "scissors"];
let randomOption = playOptions[Math.floor(Math.random() * playOptions.length)];

function getComputerChoice () {
    return randomOption;
}

let playerInput = prompt("Make your move! Type Rock, Paper,or Scissors");
let playerPoint = 0;
let computerPoint = 0;
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
        computerPoint++;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win, Rock beats Scissors!");
        playerPoint++;
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win, Paper covers Rock!");
        playerPoint++
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
  

  function game (){
    for (let counter = 0; counter < 5; counter++) {

        if (counter => 1) {
        console.log("Round " + (counter +1))
        }

        playRound(playerSelection, randomOption);

    }
  console.log(`Player score = ${playerPoint} | Computer score = ${computerPoint}`)
    if (playerPoint > computerPoint) {
        console.log("You win the game!") 
    } 
    if (playerPoint < computerPoint) {
        console.log("Sorry you lose, try again!")
    } 
    if (playerPoint == computerPoint) {
        console.log("It's a draw, try again!")
    }
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