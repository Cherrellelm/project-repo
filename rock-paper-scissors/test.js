let playerText = document.getElementById("playerText");
let goBtn = document.getElementById("goBtn");
let playDiv = document.getElementById("playDiv");
let playerSelection;

//playerText.addEventListener("click", () => clearInput());
//playerText.addEventListener("textInput", () => textBox());
goBtn.addEventListener("click", () => clickBtn());

function textBox() {
  playerText.value = "";
  console.log(playerSelection);
}

function clickBtn() {
  playerSelection = playerText.value;
  console.log(playerSelection);
}
