let playOptions = ["rock", "paper", "scissors"];

let playerPoint = 0;
let computerPoint = 0;
let playerSelection;
let computerSelection =
  playOptions[Math.floor(Math.random() * playOptions.length)];
let outcomeValue;
let playBtn = document.querySelector("#playBtn");
let gameSheet = document.querySelector("#gameSheet");
let playerText = document.querySelector("#playerText");
let startBtn = document.getElementById("#startBtn");
//playerSelection = playerSelection.toLowerCase();

playBtn.addEventListener("click", () => playerInputBox(), { once: true });

//playerInput.addEventListener("input", () => playRound());

let playerInputBox = () => {
  /*let gameBorder = (document.getElementById("gameSheet").style.border =
    "thick solid #000000");
  let gameBorderId = "gameBorder";
    gameBorder.setAttribute("id", gameBorderId);*/
  let playDiv = document.createElement("div");
  let playerTextId = "playerText";
  playerText = document.createElement("input");
  playDiv.setAttribute("id", "playDiv");
  playerText.setAttribute("id", playerTextId);
  playerText.setAttribute("type", "text");
  playerText.setAttribute("placeholder", "Type your selection...");
  gameSheet.appendChild(playDiv);
  playDiv.appendChild(playerText);
  //playDiv.appendChild(gameBorderId);
  document.getElementById("playerText").style.margin = "7px 30px 20px 30px";

  let startBtnDiv = document.createElement("div");
  let startBtnId = "startBtn";
  startBtnDiv.setAttribute("class", "item");
  playDiv.append(startBtnDiv);
  startBtn = document.createElement("button");
  startBtn.textContent = "Start!";
  startBtn.setAttribute("id", startBtnId);
  startBtnDiv.appendChild(startBtn);

  startBtn.addEventListener("click", () => clickStartBtn(), { once: true });

  startBtn.addEventListener("click", () => compBox(), { once: true });
  startBtn.addEventListener("click", () =>
    playRound(playerSelection, computerSelection)
  );
};
/*      <div class="item">
        <button id="startBtn">Go!</button>
      </div>*/

let clickStartBtn = () => {
  playerSelection = playerText.value;
  //console.log(playerSelection);
  return playerSelection;
};

let outComeDisplay = (outCome) => {
  let outComeText = document.createElement("div");
  let outComeTextId = "outcomeText";
  outComeText.setAttribute("id", outComeTextId);
  outComeText = document.createElement("p");
  outComeText.textContent == outCome;
  playDiv.append(outComeText);
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
  computerText.setAttribute("id", computerTextId);
  computerText.setAttribute("type", "text");
  computerText.setAttribute("value", computerSelection);
  gameSheet.appendChild(compDiv);
  compDiv.appendChild(computerText);
  document.getElementById("computerText").style.margin = "7px 10px 20px 30px";
  document.getElementById("computerText").readOnly = true;

  outComeDisplay(outcomeValue);
};

/*let playRound = (playerSelection, computerSelection) => {
  console.log("Player Selection is " + playerSelection);
  console.log("Computer Selection is " + computerSelection);

  let fOutcomeValue = outcomeValue;

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

let playRound = (playerSelection, computerSelection) => {
  //console.log("Player Selection is " + playerSelection);
  //console.log("Computer Selection is " + computerSelection);

  if (playerSelection == computerSelection) {
    return "It's a draw!";
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
};

let score = `Player score = ${playerPoint} | Computer score = ${computerPoint}`;
if (playerPoint > computerPoint) {
  console.log("You win the game!");
}
if (playerPoint < computerPoint) {
  console.log("Sorry you lose, try again!");
}
/*if (playerPoint == computerPoint) {
  console.log("It's a draw, play again!");
}

  if (!playerSelection.includes("rock")) {
    invalidInputDisplay();
  } else if (!playerSelection.includes("scissors")) {
    invalidInputDisplay();
  } else if (!playerSelection.includes("paper")) {
    invalidInputDisplay();
  }
*/
