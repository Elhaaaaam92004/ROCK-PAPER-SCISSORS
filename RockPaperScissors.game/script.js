// grab elements
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");

const resultText = document.getElementById("results");
const userScoreText = document.getElementById("user-score");
const myScoreText = document.getElementById("myscore");

// scores
let userScore = 0;
let myScore = 0;

// choices
const choices = ["rock", "paper", "scissor"];

// computer move
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// game logic
function playRound(userChoice) {
    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        resultText.textContent = "It's a tie 😐";
        return;
    }

    if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        userScore++;
        resultText.textContent = `You won! 😎 ${userChoice} beats ${computerChoice}`;
    } else {
        myScore++;
        resultText.textContent = `You lost 😭 ${computerChoice} beats ${userChoice}`;
    }

    userScoreText.textContent = userScore;
    myScoreText.textContent = myScore;
}

// event listeners
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorBtn.addEventListener("click", () => playRound("scissor"));
