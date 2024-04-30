// Step 2: 

function getComputerChoice(){
    rock = 0;
    paper = 1;
    scissors = 2;
    let randomNum = Math.floor(Math.random()*3);

    if (rock==randomNum){
        return ('rock');
    }

    else if(paper==randomNum){
        return ('paper');
    }

    else{
        return ('scissors');
    }

}


let humanScore = 0;
let computerScore = 0;
const container = document.querySelector('#container');
function displayWinner(winningMessage){
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = winningMessage;
    container.appendChild(content);
}
// making a function that can display it
function playRound(humanChoice, computerChoice){
    if ((humanChoice == 'rock') && (computerChoice == 'paper')){
        computerScore++;
        displayWinner('You lose! Paper beats rock');
        displayComputerScore();      
            } 
        
    else if ((humanChoice == 'paper') && (computerChoice == 'rock')){
        humanScore++;
        displayWinner('You Win! Rock beats Paper');
        displayHumanScore();
            }
        
    else if ((humanChoice == 'scissors') && (computerChoice == 'rock')){
        computerScore++;
        displayWinner('You Lose! Rock Beats Scissors');
        displayComputerScore();

            }
        
    else if ((humanChoice == 'rock') && (computerChoice == 'scissors')){
        humanScore++;
        displayWinner('You win! Rock Beats Scissors');
        displayHumanScore();

            }
        
    else if ((humanChoice == 'paper') && (computerChoice == 'scissors')){
        computerScore++;
        displayWinner('You Lose! scissors beats paper');
        displayComputerScore();
            
            }
        
    else if ((humanChoice == 'scissors') && (computerChoice == 'paper')){
        humanScore++;
        displayWinner('You Win! Scissors beats paper');
        displayHumanScore();

            }
        
        }
    
    

//Rock Button 
const rockButton = document.querySelector('#rock');
function runRock(){
    const computerSelection = getComputerChoice();
    playRound('rock', computerSelection);
    determineWinner();
}
rockButton.addEventListener("click",
runRock
)


//Paper Button
const paperButton = document.querySelector('#paper');
function runPaper(){
    const computerSelection = getComputerChoice();
    playRound('paper', computerSelection);
    determineWinner();
}
paperButton.addEventListener('click',
runPaper
)

//Scissor button
const scissorButton = document.querySelector('#scissor');
function runScissor(){
    const computerSelection = getComputerChoice();
    playRound('scissors', computerSelection);
    determineWinner();
}
scissorButton.addEventListener('click',
runScissor

)

const scoreContainer = document.querySelector('#humanScoreContainer');
let scoreContext = document.createElement('div');
scoreContext.classList.add('scoreContext');

const computerContainer = document.querySelector('#computerScoreContainer');
let compcontext = document.createElement('div');
compcontext.classList.add('compcontext');

function displayHumanScore(){
    scoreContext.textContent = humanScore;
    scoreContainer.appendChild(scoreContext);

}

function displayComputerScore(){
    compcontext.textContent = computerScore;
    computerContainer.appendChild(compcontext);
}

function win(){
    const winningMessage = document.querySelector('#winningMessage');
    const messageContext = document.createElement('div');
    messageContext.classList.add('messageContext');
    messageContext.textContent = 'You Win! ';
    winningMessage.appendChild(messageContext);
};

function lose(){
    const losingMessage = document.querySelector('#losingMessage');
    const messageContext = document.createElement('div');
    messageContext.classList.add('messageContext');
    messageContext.textContent = 'You Lose! ';
    losingMessage.appendChild(messageContext);
};

function determineWinner(){
    if (humanScore >= 5){
        win();
        compcontext.remove();
        scoreContext.remove();
        removeListener();
    }

    else if (computerScore >= 5){
        lose();
        compcontext.remove();
        scoreContext.remove();
        removeListener();
    }
}


function removeListener(){
    rockButton.removeEventListener('click', runRock);
    paperButton.removeEventListener('click', runPaper);
    scissorButton.removeEventListener('click', runScissor);
}
