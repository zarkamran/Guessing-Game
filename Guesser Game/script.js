let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget () {
    return Math.random() * 9;
};

function compareGuess(human, computer, secret) {
    return (secret - human) == (secret - human) ? true : (secret - human) < (secret - computer) ? 
    true:false;
};

function updateScore(_value) {
    if (_value == 'human') {
        humanScore++;
    } else {
        computerScore++;
    }

};

function advancedRound() {
    currentRoundNumber ++;
}

