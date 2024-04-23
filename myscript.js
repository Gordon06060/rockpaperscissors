// Step 2: 

function getComputerChoice(){
    rock = 0;
    paper = 1;
    scissors = 2;
    let randomNum = Math.floor(Math.random()*3);

    if (rock==randomNum){
        console.log('Rock');
    }

    else if(paper==randomNum){
        console.log('Paper');
    }

    else{
        console.log('Scissors');
    }



}

getComputerChoice()

