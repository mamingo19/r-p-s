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
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection){
    if(playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
        return 'Invalid option!'
    }
    else if(playerSelection === computerSelection){
        return `Draw, player: ${playerSelection}, computer: ${computerSelection}`;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"
            ||playerSelection === "rock" && computerSelection === "scissors"
            ||playerSelection === "paper" && computerSelection === "rock"){
        playerScore = playerScore + 1;
        return `You Win!: ${playerSelection} beats ${computerSelection}`;
    }
    else{
        computerScore = computerScore + 1;
        return `You Lose!: ${computerSelection} beats ${playerSelection} `;
    }
}
    function playGame() {
        for(let i = 0; i < 5; i++){
            const computerSelection = getComputerChoice();
            playerSelection = prompt("Choose your option rock, paper or scissor").toLowerCase();
            playRound(playerSelection, computerSelection);
            console.log(playRound(playerSelection, computerSelection));
            console.log(`Player score is: ${playerScore/2} and computer score is: ${computerScore/2}`);
        }
    }

    playGame();

