//Let's play rock, paper, scissors - The Correct Code
let playOptions = ["rock", "paper", "scissors"];

let playerInput = "rock";
let playerPoint = 0;
let computerPoint = 0;
let playerSelection = playerInput;
let computerSelection = playOptions[Math.floor(Math.random() * playOptions.length)];

let playBtn = document.querySelector("#playBtn");

playerSelection = playerSelection.toLowerCase();

//playBtn.addEventListener ('click',() => gameDisplay());
//playerTextBox.addEventListener()

//let gameDisplay = () => {
   /* let gameSheet = document.getElementById('#gameSheet');
    let compLabel = document.createElement("LABEL");
    compLabel.setAttribute("for", "Computer Choice");
    compLabel.value = "Computer Choice";
    gameSheet.appendChild(compLabel);

    let compTextBox = document.createElement("INPUT");
    compTextBox.setAttribute("type", "text", "id");
    compTextBox.value = computerSelection;
    gameSheet.appendChild(compTextBox);
    
    let playerLabel = document.createElement("LABEL");
    playerLabel.setAttribute("for", "Player Choice");
    playerLabel.value = "Computer Choice";
    gameSheet.appendChild(playerLabel);


    let playerTextBox = document.createElement('INPUT');
    playerTextBox.setAttribute("type", "text", "id");
    playerTextBox.value = playerInput
    gameSheet.appendChild(playerTextBox);
    }*/
   

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
