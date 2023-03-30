let playerText = document.getElementById("playerText");
let goBtn = document.getElementById("goBtn");
let playDiv = document.getElementById("playDiv");

playerText.addEventListener("click", () => clearInput());
playerText.addEventListener("textInput", () => textBox());

function clearInput() {
  return (playerText.value = "");
}

function textBox() {
  console.log("text entered");
}

function clickBtn(btn) {
  console.log("clicked");
}
