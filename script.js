var playerScore = 0;
var computerScore = 0;

function computerPlay() {
  let randomNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0; //(max - min + 1)) + min

  if (randomNum == 0) {
    return "rock"
  } else if (randomNum == 1) {
    return "paper"
  } else {
    return "scissors"
  }
}

function playRound(playerSelection, computerSelection) {
  let result = ""
  playerSelection = playerSelection.toLowerCase(); //case-insensitive

  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      result = "Draw!";
    } else if (computerSelection == "paper") {
      result = "You Lose the Round! Paper beats Rock";
    } else if (computerSelection == "scissors") {
      result = "You Win the Round! Rock beats Scissors";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      result = "You Win the Round! Paper beats Rock";
    } else if (computerSelection == "paper") {
      result = "Draw!";
    } else if (computerSelection == "scissors") {
      result = "You Lose the Round! Scissors beats Paper";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      result = "You Lose the Round! Rock beats Scissors";
    } else if (computerSelection == "paper") {
      result = "You Win the Round! Scissors beats Paper";
    } else if (computerSelection == "scissors") {
      result = "Draw!";
    }
  }
  return result;
}

//UI

var scoreInfo = document.getElementById("scoreInfo"); //connecting HTML elements to JS variables
var playerScoreText = document.getElementById("playerScore");
var computerScoreText = document.getElementById("computerScore");
var rockBtn = document.getElementById("rockBtn");
var paperBtn = document.getElementById("paperBtn");
var scissorsBtn = document.getElementById("scissorsBtn");

rockBtn.addEventListener('click', () => handleClick("rock")) //when btn clicked, run playRound and give it the player selection
paperBtn.addEventListener('click', () => handleClick("paper"))
scissorsBtn.addEventListener('click', () => handleClick("scissors"))

function handleClick(playerSelection){
  if (isGameOver() == true){
    handleGameOver()
  }

  let computerSelection = computerPlay();
  let roundResult = playRound(playerSelection, computerSelection);

  if (roundResult.search("You Win the Round!") > -1) {
    playerScore++;
  } else if (roundResult.search("You Lose the Round!") > -1) {
    computerScore++;
  }

  updateScoreBoard(roundResult)

  if (isGameOver() == true){
    handleGameOver()
  }
}

function updateScoreBoard(roundResult){
  scoreInfo.textContent = roundResult; //display round info
  playerScoreText.textContent = playerScore; //display round score
  computerScoreText.textContent = computerScore;
}

function isGameOver(){
  return (playerScore == 5) || (computerScore == 5)
}

function handleGameOver(){
  if (playerScore == 5) {
    scoreInfo.textContent = "You Win the Game!";
  } else if (playerScore == computerScore) {
    scoreInfo.textContent = "The Game ended in a draw!";
  } else {
    scoreInfo.textContent = "You Lose the Game!";
  }
  playerScore = 0;
  computerScore = 0;
}
