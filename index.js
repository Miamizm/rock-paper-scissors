const options = ['Rock','Paper','Scissors'];
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)] 
    return choice;
};




function checkWinner(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Tie!'; }
         else if (
        (playerSelection == 'Rock' && computerSelection == 'Scissors' || playerSelection == 'Scissors' 
        && computerSelection == 'Paper' || playerSelection == 'Paper' && computerSelection == 'Rock' ) 
         ) {
            return 'Player wins!';
         } else {
            return 'Computer wins!';
         }
        }; 
    

function playRound(playerSelection,computerSelection) {
    const result = checkWinner(playerSelection,computerSelection);
    if (result == 'Tie!') {
        return  "It's a tie!";
    } else if (result == 'Player wins!') {
       return `You Win! ${playerSelection} beats ${computerSelection}!`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`
    }
};

const playerSelection = 'Scissors';  // enter your own choice with a string 
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));
console.log(playRound(playerSelection,computerSelection));
console.log(playRound(playerSelection,computerSelection));
console.log(playRound(playerSelection,computerSelection));
console.log(playRound(playerSelection,computerSelection));