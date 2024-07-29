// Initialize user and computer scores to 0
let userScore = 0;
let compScore = 0;

// Select all elements with the class "choice" (rock, paper, scissors)
const choices = document.querySelectorAll(".choice");

// Select the elements for displaying messages and scores
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

// Function to generate a random computer choice
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

// Function to display a draw message
const drawGame = () => {
    msg.textContent = "It's a draw!";
    msg.style.backgroundColor = "grey";
}

// Function to show the winner and update scores
const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.textContent = userScore;
        msg.textContent = `You win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.textContent = compScore;
        msg.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// Main function to play the game, comparing user and computer choices
const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);

    // Generate the computer's choice
    const computerChoice = genComputerChoice();
    console.log("Computer choice = ", computerChoice);

    // Determine the result of the game and update the scores and message accordingly
    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWin = computerChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, computerChoice);
    }
}

// Add event listeners to each choice (rock, paper, scissors) to trigger the game logic on click
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Get the ID of the clicked choice (rock, paper, or scissors)
        playGame(userChoice); // Play the game with the user's choice
    });
});
