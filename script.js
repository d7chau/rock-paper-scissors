function computerPlay() {
  let randomNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0; //(max - min + 1)) + min

  if (randomNum == 0) {
    return "rock";
  }
  if (randomNum == 1) {
    return "paper";
  }
  if (randomNum == 2) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let result = "";
  playerSelection = playerSelection.toLowerCase(); //case-insensitive

  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      result = "Draw! Both chose Rock";
    } else if (computerSelection == "paper") {
      result = "You Lose! Paper beats Rock";
    } else if (computerSelection == "scissors") {
      result = "You Win! Rock beats Scissors";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      result = "You Win! Paper beats Rock";
    } else if (computerSelection == "paper") {
      result = "Draw! Both chose Paper";
    } else if (computerSelection == "scissors") {
      result = "You Lose! Scissors beats Paper";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      result = "You Lose! Rock beats Scissors";
    } else if (computerSelection == "paper") {
      result = "You Win! Scissors beats Paper";
    } else if (computerSelection == "scissors") {
      result = "Draw! Both chose Scissors";
    }
  }
  return result;
}

const playerSelection = "roCK";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

computerPlay();
// playRound();
