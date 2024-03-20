let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
        return 'Invalid option!'
    } else if(playerSelection === computerSelection){
        return `Draw, player: ${playerSelection}, computer: ${computerSelection}`;
    } else if(playerSelection === "scissors" && computerSelection === "paper"
            ||playerSelection === "rock" && computerSelection === "scissors"
            ||playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        return `You Win!: ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You Lose!: ${computerSelection} beats ${playerSelection}`;
    }
}

function updateScore() {
    document.getElementById('score').innerText = `Player score: ${playerScore} Computer score: ${computerScore}`;
}

function displayResult(result) {
    document.getElementById('result').innerText = result;
}

function checkWinner() {
    if (playerScore === 5) {
        displayResult("Player wins the game!");
    } else if (computerScore === 5) {
        displayResult("Computer wins the game!");
    }
}

document.getElementById('rock').addEventListener('click', function() {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    const result = playRound(playerSelection, computerSelection);
    displayResult(result);
    updateScore();
    checkWinner();
});

document.getElementById('paper').addEventListener('click', function() {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    const result = playRound(playerSelection, computerSelection);
    displayResult(result);
    updateScore();
    checkWinner();
});

document.getElementById('scissors').addEventListener('click', function() {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    const result = playRound(playerSelection, computerSelection);
    displayResult(result);
    updateScore();
    checkWinner();
});
