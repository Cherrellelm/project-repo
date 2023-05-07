/*

**** Global variable ****

[X] A variable to count the rounds 
[X] A variable to store the player selection and computer selection
-- Remember to reset the values when we start a new round
[X] A variable to store the round result ("HUMAN", "COMPUTER", "DRAW")


[X] Create a function to generate `divPlayRound` div
[X]  Create `Round`
[X] -- Use global variable to increment the counter
[X] Create `divChoices` div to capture Player and Computer choices
[X] - Make a pair of labels and textboxes
[X]-- Hide the Computer textbox
[X] Create `btnStart` button and click event `clickStartBtn()`
[X] Create the `output` paragraph


clickStartBtn()
[X] Call function to generate a choice for the computer
[X] Call function to assign Computer's choice and show the Computer textbox
[X] Call function to decide the result
[X] Call function to show the result in the output box
[X]Call function to decide to play next round


**** Nice to have ****
[ ] Play multiple games

*/

let playOptions = ["rock", "paper", "scissors"];
let playValues = ["rock", "paper", "scissors"];

let isDraw = true;
let round = 1;
let playerSelection;
let computerSelection;
let roundResult;
let playerPoint = 0;
let computerPoint = 0;
let gameOutcome;
//let reset;
let playBtn = document.querySelector("#playBtn");
let gameSheet = document.querySelector("#gameSheet");
let playerText = document.querySelector("#playerText");
let scoreCounter = document.querySelector("#scoreDisplay");

playBtn.addEventListener("click", () => playRound(), { once: true });

function playRound() {
  let divPlayRound = document.createElement("div");
  let divPlayRoundId = `divPlayRound` + round;
  divPlayRound.setAttribute("id", divPlayRoundId);
  divPlayRound.setAttribute("class", "graybg");

  let divLblRound = document.createElement("div");
  let divLblRoundId = "divLblRound" + round;
  divLblRound.setAttribute("id", divLblRoundId);
  divLblRound.setAttribute("class", "item");

  let lblRound = document.createElement("label");
  let lblRoundId = "lblRound" + round;
  lblRound.setAttribute("id", lblRoundId);
  lblRound.innerText = "Round: " + round;

  let divChoices = document.createElement("div");
  let divChoicesId = "divChoices" + round;
  divChoices.setAttribute("id", divChoicesId);
  divChoices.setAttribute("class", "container choices");

  let divPlayerChoice = document.createElement("div");
  let divPlayerChoiceId = "divPlayerChoice" + round;
  divPlayerChoice.setAttribute("id", divPlayerChoiceId);
  divPlayerChoice.setAttribute("class", "item");

  let selectPlayerChoice = document.createElement("select");
  let selectPlayerChoiceId = "SelectPlayerChoice" + round;
  selectPlayerChoice.setAttribute("id", selectPlayerChoiceId);

  let optPlayerChoice = document.createElement("option");
  optPlayerChoice.text = "Make your selection...";
  optPlayerChoice.value = "";
  optPlayerChoice.selected = true;
  optPlayerChoice.disabled = true;
  optPlayerChoice.hidden = true;

  for (counter = 0; counter < playOptions.length; counter++) {
    let optPlayerChoice = document.createElement("option");
    optPlayerChoice.text = playOptions[counter];
    optPlayerChoice.value = playValues[counter];
    selectPlayerChoice.appendChild(optPlayerChoice);
  }

  let divComputerChoice = document.createElement("div");
  let divComputerChoiceId = "divComputerChoice" + round;
  divComputerChoice.setAttribute("id", divComputerChoiceId);
  divComputerChoice.setAttribute("class", "item");

  let lblComputerChoice = document.createElement("label");
  let lblComputerChoiceId = "lblComputerChoice" + round;
  lblComputerChoice.setAttribute("id", lblComputerChoiceId);
  lblComputerChoice.innerText = "Computer Selection:";

  let inputComputerChoice = document.createElement("input");
  let inputComputerChoiceId = "computerText" + round;
  inputComputerChoice.setAttribute("id", inputComputerChoiceId);
  inputComputerChoice.setAttribute("type", "text");
  inputComputerChoice.setAttribute("readonly", true);

  let startBtnDiv = document.createElement("div");
  startBtnDiv.setAttribute("class", "item");

  let startBtn = document.createElement("button");
  let startBtnId = "startBtn" + round;
  startBtn.setAttribute("id", startBtnId);
  startBtn.innerText = "Rock Paper Scissors Shoot";

  let outComeDiv = document.createElement("div");
  //outComeDiv.setAttribute("class", "greenline");

  let outComeP = document.createElement("p");
  let outComePId = "outcomeText" + round;
  outComeP.setAttribute("id", outComePId);
  outComeP.setAttribute("class", "largetext");
  outComeP.innerText = "";

  divLblRound.appendChild(lblRound);

  selectPlayerChoice.appendChild(optPlayerChoice);
  divPlayerChoice.appendChild(selectPlayerChoice);

  divComputerChoice.appendChild(lblComputerChoice);
  divComputerChoice.appendChild(inputComputerChoice);

  divChoices.appendChild(divPlayerChoice);
  divChoices.appendChild(divComputerChoice);

  startBtnDiv.appendChild(startBtn);

  outComeDiv.appendChild(outComeP);
  /*resetBtnDiv.appendChild(resetBtn);

  divPlayRound.appendChild(resetBtnDiv);*/
  divPlayRound.appendChild(divLblRound);
  divPlayRound.appendChild(divChoices);
  divPlayRound.appendChild(startBtnDiv);
  divPlayRound.appendChild(outComeDiv);

  gameSheet.appendChild(divPlayRound);

  selectPlayerChoice.addEventListener("change", () => enableStartBtn());

  startBtn.addEventListener("click", () => clickStartBtn(), { once: true });

  startBtn = document.getElementById("startBtn" + round).disabled = true;

  divComputerChoice.style.display = "none";

  //let resetBtn = document.getElementById("resetBtn" + round);
}

function clickStartBtn() {
  getRandomChoice();
  assignComputerChoice();
  assignPlayerChoice();
  playGame();
  outComeDisplay(gameOutcome);
  console.log("rock paper scissors " + computerSelection);

  /*if (round <= 4) {
    round++;
    resetGame();
  }*/

  if (isDraw) {
    round++;
    playRound();
  } else {
    showResetBtn();
  }
}

function enableStartBtn() {
  startBtn = document.getElementById("startBtn" + round).disabled = false;
}

function getRandomChoice() {
  computerSelection =
    playOptions[Math.floor(Math.random() * playOptions.length)];
}

function assignComputerChoice() {
  let inputComputerChoice = document.getElementById("computerText" + round);
  let divComputerChoice = document.getElementById("divComputerChoice" + round);
  inputComputerChoice.value = computerSelection;
  divComputerChoice.style.display = "block";
}

function assignPlayerChoice() {
  let selectPlayerChoice = document.getElementById(
    "SelectPlayerChoice" + round
  );
  playerSelection = selectPlayerChoice.value;
}

function outComeDisplay(outcome) {
  let outComeP = document.getElementById("outcomeText" + round);
  outComeP.innerText = gameOutcome;
}

function scoreDisplay() {
  let scoreCounter = document.getElementById("scoreDisplay" + round);
  scoreCounter.setAttribute
}

function playGame() {
  console.log("Player Selection is " + playerSelection);
  console.log("Computer Selection is " + computerSelection);

  if (playerSelection == computerSelection) {
    gameOutcome = "It's a draw!";
    console.log("It's a draw!");
  } else {
    isDraw = false;
  }
  if (playerSelection == "rock" && computerSelection == "paper") {
    gameOutcome = "You lose, Paper covers Rock!";
    console.log("You lose, Paper covers Rock!");
    computerPoint++;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    gameOutcome = "You win, Rock beats Scissors!";
    console.log("You win, Rock beats Scissors!");
    playerPoint++;
  }

  if (playerSelection == "paper" && computerSelection == "rock") {
    gameOutcome = "You win, Paper covers Rock!";
    console.log("You win, Paper covers Rock!");
    playerPoint++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    gameOutcome = "You lose, Scissors cuts Paper!";
    console.log("You lose, Scissors cuts Paper!");
    computerPoint++;
  }

  if (playerSelection == "scissors" && computerSelection == "rock") {
    gameOutcome = "You lose, Rock beats Scissors!";
    console.log("You lose, Rock beats Scissors!");
    computerPoint++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    gameOutcome = "You win, Scissors cuts Paper!";
    console.log("You win, Scissors cuts Paper!");
    playerPoint++;
  }
}


function showResetBtn() {
  let divPlayRound;
  let resetBtnDiv = document.createElement("div");
  resetBtnDiv.setAttribute("class", "item");

  let resetBtn = document.createElement("button");
  let resetBtnId = "resetBtn" + round;
  resetBtn.setAttribute("id", resetBtnId);
  resetBtn.innerText = "Rock Paper Scissors Shoot";

  resetBtnDiv.appendChild(resetBtn);

  divPlayRound.appendChild(resetBtnDiv);
}

/*function resetGame() {
  playBtn.addEventListener("click", () => playRound(), { once: true });
}*/

/*let score = `Player score = ${playerPoint} | Computer score = ${computerPoint}`;
if (playerPoint > computerPoint) {
  console.log("You win the game!");
}
if (playerPoint < computerPoint) {
  console.log("Sorry you lose, try again!");
}*/
