const choices = ["rock", "paper", "scissors"];
const randomNumber = Math.floor(Math.random() * 3);

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = choices[randomNumber];
  console.log(computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Select rock, paper, or scissors");
  console.log(humanChoice);
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It was a tie, try again");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You won, you are awarded one point");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You won, you are awarded one point");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You won, you are awarded one point");
    humanScore++;
  } else {
    console.log("the Computer beat you they get one point");
    computerScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
