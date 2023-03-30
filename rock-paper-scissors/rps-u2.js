let playOptions = ["rock", "paper", "scissors"];

let playerPoint = 0;
let playerInput = "rock";
let computerPoint = 0;
let playerSelection = playerInput;
let computerSelection =
  playOptions[Math.floor(Math.random() * playOptions.length)];

let playBtn = document.querySelector("#playBtn");
let gameSheet = document.querySelector("#gameSheet");
let startBtn = document.querySelector("#startBtn");
playerInput = document.querySelector("#playerText");
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
  let playerText = document.createElement("input");
  playDiv.setAttribute("id", "playDiv");
  playerText.setAttribute("id", playerTextId);
  playerText.setAttribute("type", "text");
  playerText.setAttribute("placeholder", "Make a selection");
  gameSheet.appendChild(playDiv);
  playDiv.appendChild(playerText);
  //playDiv.appendChild(gameBorderId);
  document.getElementById("playerText").style.margin = "7px 30px 20px 30px";

  let startBtnDiv = document.createElement("div");
  let startBtnId = "startBtn";
  startBtnDiv.setAttribute("class", "item");
  playDiv.append(startBtnDiv);
  startBtn = document.createElement("button");
  startBtn.textContent = "Go!";
  startBtn.setAttribute("id", startBtnId);
  startBtnDiv.appendChild(startBtn);

  startBtn.addEventListener("click", () => compBox(), { once: true });

  /*      <div class="item">
        <button id="startBtn">Go!</button>
      </div>*/

  /*let outcomeText = document.createElement("div");
  let outcomeTextId = "outcomeText";
  outcomeText.setAttribute("id", outcomeTextId);
  outcomeText = document.createElement("p");
  outcomeText.textContent = score;*/
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
};

let playRound = (playerSelection, computerSelection) => {
  console.log("Player Selection is " + playerSelection);
  console.log("Computer Selection is " + computerSelection);

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

/*function gameRepeat (){
    for (let counter = 0; counter < 5; counter++) {

        if (counter => 1) {
        console.log("Round " + (counter +1));
        }

        playRound(playerSelection, computerSelection);
        computerSelection = playOptions[Math.floor(Math.random() * playOptions.length)];
    }*/

let score = `Player score = ${playerPoint} | Computer score = ${computerPoint}`;
if (playerPoint > computerPoint) {
  console.log("You win the game!");
}
if (playerPoint < computerPoint) {
  console.log("Sorry you lose, try again!");
}
if (playerPoint == computerPoint) {
  console.log("It's a draw, play again!");
}
//}

//gameRepeat();
//<input></input>
