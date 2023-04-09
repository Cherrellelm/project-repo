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
-- Call function to show the result in the output box
-- Call function to decide to play next round


**** Nice to have ****
[ ] Play multiple games
[ ] Validate player's input

*/

let playOptions = ["rock", "paper", "scissors"];
let playValues = ["rk", "pr", "ss"];

let round = 1;
let playerSelection;
let computerSelection;
let roundResult;
let playerPoint = 0;
let computerPoint = 0;
let fOutcomeValue;
let playBtn = document.querySelector("#playBtn");
let gameSheet = document.querySelector("#gameSheet");
let playerText = document.querySelector("#playerText");
//let startBtn = document.getElementById("#startBtn");
//playerSelection = playerSelection.toLowerCase();

playBtn.addEventListener("click", () => playRound(), { once: true });

function playRound() {
  let divPlayRound = document.createElement("div");
  let divPlayRoundId = `divPlayRound` + round;
  divPlayRound.setAttribute("id", divPlayRoundId);
  divPlayRound.setAttribute("class", "graybg redline");

  let divLblRound = document.createElement("div");
  let divLblRoundId = "divLblRound" + round;
  divLblRound.setAttribute("id", divLblRoundId);
  divLblRound.setAttribute("class", "item greenline");

  let lblRound = document.createElement("label");
  let lblRoundId = "lblRound" + round;
  lblRound.setAttribute("id", lblRoundId);
  lblRound.innerText = "Round: " + round;

  let divChoices = document.createElement("div");
  let divChoicesId = "divChoices" + round;
  divChoices.setAttribute("id", divChoicesId);
  divChoices.setAttribute("class", "container choices greenline");

  let divPlayerChoice = document.createElement("div");
  let divPlayerChoiceId = "divPlayerChoice" + round;
  divPlayerChoice.setAttribute("id", divPlayerChoiceId);
  divPlayerChoice.setAttribute("class", "item greenline");

  /*let lblPlayerChoice = document.createElement("label");
  let lblPlayerChoiceId = "lblPlayerChoice" + round;
  lblPlayerChoice.setAttribute("id", lblPlayerChoiceId);
  lblPlayerChoice.innerText = "Player Selection:";

  let inputPlayerChoice = document.createElement("input");
  let inputPlayerChoiceId = "playerText" + round;
  inputPlayerChoice.setAttribute("id", inputPlayerChoiceId);
  inputPlayerChoice.setAttribute("type", "text");
  inputPlayerChoice.setAttribute("placeholder", "Type your selection...");
  
  
                <select id="selectID">
                <option value="" disabled selected hidden>
                  Make your selection...
                </option>
                <option value="rock">Rock</option>
                <option value="paper">Paper</option>
                <option value="scissors">Scissors</option>
              </select>
            </div>*/

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
  divComputerChoice.setAttribute("class", "item greenline");

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
  startBtnDiv.setAttribute("class", "item greenline");

  let startBtn = document.createElement("button");
  let startBtnId = "startBtn" + round;
  startBtn.setAttribute("id", startBtnId);
  startBtn.innerText = "Rock Paper Scissors Shoot";

  let outComeDiv = document.createElement("div");
  outComeDiv.setAttribute("class", "greenline");

  let outComeP = document.createElement("p");
  let outComePId = "outcomeText" + round;
  outComeP.setAttribute("id", outComePId);
  outComeP.setAttribute("class", "largetext");
  outComeP.innerText = "CNN Breaking News";

  divLblRound.appendChild(lblRound);

  selectPlayerChoice.appendChild(optPlayerChoice);
  divPlayerChoice.appendChild(selectPlayerChoice);

  divComputerChoice.appendChild(lblComputerChoice);
  divComputerChoice.appendChild(inputComputerChoice);

  divChoices.appendChild(divPlayerChoice);
  divChoices.appendChild(divComputerChoice);

  startBtnDiv.appendChild(startBtn);

  outComeDiv.appendChild(outComeP);

  divPlayRound.appendChild(divLblRound);
  divPlayRound.appendChild(divChoices);
  divPlayRound.appendChild(startBtnDiv);
  divPlayRound.appendChild(outComeDiv);

  gameSheet.appendChild(divPlayRound);

  startBtn.addEventListener("click", () => clickStartBtn(), { once: true });

  divComputerChoice.style.display = "none";

  /*let roundDiv = document.createElement("div");
  // JP
  // removed setting value 1 to `round`
  roundDiv.textContent = "Round: " + round;
  // JP
  //gameSheet.appendChild(roundDiv);
  divPlayRound.appendChild(roundDiv);

  let playDiv = document.createElement("div");
  let playerTextId = "playerText";
  let playLabel = document.createElement("label");
  playLabel.textContent = "Player Selection:";
  playDiv.appendChild(playLabel);

  playerText = document.createElement("input");
  playDiv.setAttribute("id", "playDiv");
  playerText.setAttribute("id", playerTextId);
  playerText.setAttribute("type", "text");
  playerText.setAttribute("placeholder", "Type your selection...");
  // JP
  //gameSheet.appendChild(playDiv);
  divPlayRound.appendChild(playDiv);

  playDiv.appendChild(playerText);
  //playDiv.appendChild(gameBorderId);
  // JP
  //document.getElementById("playerText").style.margin = "7px 30px 20px 30px";

  let startBtnDiv = document.createElement("div");
  let startBtnId = "startBtn";
  startBtnDiv.setAttribute("class", "item");
  playDiv.append(startBtnDiv);
  startBtn = document.createElement("button");
  startBtn.textContent = "Start!";
  startBtn.setAttribute("id", startBtnId);
  startBtnDiv.appendChild(startBtn);



  startBtn.addEventListener("click", () => compBox(), { once: true });
  startBtn.addEventListener("click", () =>
    playRound(playerSelection, computerSelection)
  );*/
}

let clickStartBtn = () => {
  getRandomChoice();
  assignComputerChoice();
  console.log("rock paper scissors " + computerSelection);
  //return playerSelection;
};

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

let outComeDisplay = (outcome) => {
  let outComeTextDiv = document.createElement("div");
  let outComeTextId = "outcomeText";
  let outComeText = document.createElement("p");
  outComeText.setAttribute("id", outComeTextId);
  outComeText.textContent = fOutcomeValue;
  playDiv.append(outComeTextDiv);
  outComeTextDiv.appendChild(outComeText);
};

let invalidInputDisplay = () => {
  let invalidText = document.createElement("div");
  let invalidTextId = "invalidText";
  invalidText.setAttribute("id", invalidTextId);
  invalidText = document.createElement("p");
  invalidText.textContent =
    "Your selection is invalid, please type rock, paper, or scissors.";
  playDiv.append(invalidText);
};

let compBox = () => {
  let compDiv = document.createElement("div");
  let computerText = document.createElement("input");
  let computerTextId = "computerText";
  let compLabel = document.createElement("label");
  compLabel.textContent = "Computer Selection:";
  compDiv.appendChild(compLabel);
  computerText.setAttribute("id", computerTextId);
  computerText.setAttribute("type", "text");
  computerText.setAttribute("value", computerSelection);
  gameSheet.appendChild(compDiv);
  compDiv.appendChild(computerText);
  document.getElementById("computerText").style.margin = "7px 10px 20px 30px";
  document.getElementById("computerText").readOnly = true;
  let outcomeDiv = document.createElement("div");
  outcomeDiv.textContent = fOutcomeValue;
  gameSheet.appendChild(outcomeDiv);
  outComeDisplay(fOutcomeValue);
};

/*let playRound = (playerSelection, computerSelection) => {
  console.log("Player Selection is " + playerSelection);
  console.log("Computer Selection is " + computerSelection);*/

/* let fOutcomeValue;

  if (playerSelection == computerSelection) {
    fOutcomeValue == "It's a draw!";
  }
  if (playerSelection == "rock" && computerSelection == "paper") {
    fOutcomeValue == "You lose, Paper covers Rock!";
    computerPoint++;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    fOutcomeValue == "You win, Rock beats Scissors!";
    playerPoint++;
  }

  if (playerSelection == "paper" && computerSelection == "rock") {
    fOutcomeValue = "You win, Paper covers Rock!";
    playerPoint++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    fOutcomeValue = "You lose, Scissors cuts Paper!";
    computerPoint++;
  }

  if (playerSelection == "scissors" && computerSelection == "rock") {
    fOutcomeValue = "You lose, Rock beats Scissors!";
    computerPoint++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    fOutcomeValue = "You win, Scissors cuts Paper!";
    playerPoint++;
  }
};*/

let score = `Player score = ${playerPoint} | Computer score = ${computerPoint}`;
if (playerPoint > computerPoint) {
  console.log("You win the game!");
}
if (playerPoint < computerPoint) {
  console.log("Sorry you lose, try again!");
}
