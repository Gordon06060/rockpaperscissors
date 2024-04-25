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
function getHumanChoice(){
    let userInput = prompt('Enter your choice: Rock, Paper, or Scissors');
    return (userInput.toLowerCase());
}



// Step 4:
let humanScore = 0;
let computerScore = 0;


//Step 5: 
function playRound(humanChoice, computerChoice){
    if ((humanChoice == 'rock') && (computerChoice == 'paper')){
        console.log('You lose! Rock beats Paper ');
        computerScore++;
    } 

    else if ((humanChoice == 'paper') && (computerChoice == 'rock')){
        console.log('You win! Paper beats Rock')
        humanScore++;
    }

    else if ((humanChoice == 'scissors') && (computerChoice == 'rock')){
        console.log('You Lose! Rock Beats Scissors')
        computerScore++;
    }

    else if ((humanChoice == 'rock') && (computerChoice == 'scissors')){
        console.log('You win! Rock Beats Scissors')
        humanScore++;
    }

    else if ((humanChoice == 'paper') && (computerChoice == 'scissors')){
        console.log('You Lose! scissors beats paper')
        computerScore++;
    }

    else if ((humanChoice == 'scissors') && (computerChoice == 'paper')){
        console.log('You Win! Scissors beats paper')
        humanScore++;
    }

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


