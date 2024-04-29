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

// Step 3:
// function getHumanChoice(){
//     let userInput = prompt('Enter your choice: Rock, Paper, or Scissors');
//     return (userInput.toLowerCase());
// }



// Step 4:



//Step 5: 


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
        displayWinner('You lose! Paper beats rock');
        
            } 
        
    else if ((humanChoice == 'paper') && (computerChoice == 'rock')){
        displayWinner('You Win! Rock beats Paper');
            }
        
    else if ((humanChoice == 'scissors') && (computerChoice == 'rock')){
        displayWinner('You Lose! Rock Beats Scissors');

            }
        
    else if ((humanChoice == 'rock') && (computerChoice == 'scissors')){
        displayWinner('You win! Rock Beats Scissors');

            }
        
    else if ((humanChoice == 'paper') && (computerChoice == 'scissors')){
        displayWinner('You Lose! scissors beats paper');
            
            }
        
    else if ((humanChoice == 'scissors') && (computerChoice == 'paper')){
        displayWinner('You Win! Scissors beats paper');

            }
        
        }
    
    

//Rock Button 
const rockButton = document.querySelector('#rock');
rockButton.addEventListener("click",
    function runRock(){
        const computerSelection = getComputerChoice();
        playRound('rock', computerSelection);
    }
)


//Paper Button
const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click',
    function runPaper(){
        const computerSelection = getComputerChoice();
        playRound('paper', computerSelection);
    }



)

//Scissor button
const scissorButton = document.querySelector('#scissor');
scissorButton.addEventListener('click',
    function runScissor(){
        const computerSelection = getComputerChoice();
        playRound('scissors', computerSelection);
    }

)

