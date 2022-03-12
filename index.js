// Definição dos sons
var redSound = new Audio("./sounds/red.mp3");
var blueSound = new Audio("./sounds/blue.mp3");
var greenSound = new Audio("./sounds/green.mp3");
var yellowSound = new Audio("./sounds/yellow.mp3");
var wrongSound = new Audio("./sounds/wrong.mp3");

var playSound = function (cor) {
  switch (cor) {
    case "red":
      redSound.play();
      break;
    case "blue":
      blueSound.play();
      break;
    case "green":
      greenSound.play();
      break;
    case "yellow":
      yellowSound.play();
      break;
  }
};

var pressionar = function (botao) {
  var cor = botao.classList[1];
  playSound(cor);
  botao.classList.add("pressed");
  setInterval(() => {
    botao.classList.remove("pressed");
  }, 100);
};

var round = function () {
  level++;
  $("h1").text("Level " + level);
  var index = Math.floor(Math.random() * 4);
  var botao = botoes[index];
  serie.push(botao);
  pressionar(botao);
};

var gameOver = function () {};

var verificar = function (botao) {
  if (botao == serie[serie.length - 1]) {
    round();
  } else {
    gameOver();
  }
};

var handleClick = function (e) {
  var botao = e.target;
  pressionar(botao);
};

var handleKeyDown = function () {
  if (!inGame) {
    inGame = true;
    round();
  }
  return null;
};
var inGame = false;
var level = 0;
var serie = [];
var botoes = $(".button");
$(document).keydown(handleKeyDown);
botoes.click(handleClick);
