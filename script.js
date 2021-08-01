let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let randomNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0; //(max - min + 1)) + min

  if (randomNum == 0) {
    return "rock";
  } else if (randomNum == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let result = "";
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

function game() {
  // while (playerScore != 5 && computerScore != 5) {
  //   let playerSelection = prompt("Rock, Paper, or Scissors?");
  //   let computerSelection = computerPlay();
  //   let roundResult = playRound(playerSelection, computerSelection);

  //   console.log(roundResult);

  //   if (roundResult.search("You Win the Round!") > -1) {
  //     playerScore++;
  //   } else if (roundResult.search("You Lose the Round!") > -1) {
  //     computerScore++;
  //   }
  //   console.log("Player Score: " + playerScore);
  //   console.log("Computer Score: " + computerScore);
  //   console.log("\n");
  // }

  if (playerScore > computerScore) {
    console.log("You Win the Game!");
  } else if (playerScore == computerScore) {
    console.log("The Game ended in a draw!");
  } else {
    console.log("You Lose the Game!");
  }

  playerScore = 0;
  computerScore = 0;
}

game();
