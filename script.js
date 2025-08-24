const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Select rock, paper, or scissors").toLowerCase();
  console.log(humanChoice);
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("you won, you are awarded one point");
    return "human";
  } else {
    console.log("The Computer won, They are awarded a point");
    return "computer";
  }
}
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  while (humanScore < 5 && computerScore < 5) {
    const humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    const winner = playRound(humanSelection, computerSelection);

    if (winner === "human") humanScore++;
    if (winner === "computer") computerScore++;
    console.log(`Score -- You: ${humanScore}, Computer: ${computerScore}`);
  }

  if (humanScore === 5) {
    console.log("You win the Game");
  } else {
    console.log("You lost");
  }
}

playGame();
