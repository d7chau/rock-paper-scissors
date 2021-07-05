function computerPlay() {
  let randomNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0; //(max - min + 1)) + min

  console.log(randomNum);

  if (randomNum == 0) {
    return "Rock";
  }
  if (randomNum == 1) {
    return "Paper";
  }
  if (randomNum == 2) {
    return "Scissors";
  }
}

computerPlay();
