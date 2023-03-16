let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
  }
  const generatedNumber = generateTarget();
  
  const compareGuesses = (humanGuess, computerGuess, generatedNumber) => {
    aDiff = Math.abs(humanGuess - generatedNumber);
    bDiff = Math.abs(computerGuess - generatedNumber);
    if (aDiff <= bDiff) {
      return true
    } else {
      return false
    }
  }
  
  const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }
  
  const advanceRound = () => {
    currentRoundNumber++;
  }
