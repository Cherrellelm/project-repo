let playerText = document.getElementById("playerText");
let goBtn = document.getElementById("goBtn");
let playDiv = document.getElementById("playDiv");
let playerSelection = playerText.value;

//playerText.addEventListener("click", () => clearInput());
playerText.addEventListener("textInput", () => textBox());
goBtn.addEventListener("click", () => clickBtn());

function clearInput() {
  return (playerText.value = "");
}

function textBox() {
  playerText.value = "";
  console.log(playerSelection);
}

function clickBtn() {
  return playerSelection;
  console.log();
}
