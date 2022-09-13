const options = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    let choice = Math.round(Math.random() * 2)
    return options[choice]
}
function checkPlayerChoice(string){
    string = string.toLowerCase().split("")
    string[0] = string[0].toUpperCase()
    return string.join("")
}

function playRound(playerSelection, computerSelection){
    console.log(`\nYour choice: ${playerSelection} \nComputer choice: ${computerSelection}`)
    if(playerSelection == computerSelection){
        return "It's a tie"
    } else if (playerSelection == "Rock" && computerSelection == "Scissors" 
    || playerSelection == "Paper" && computerSelection == "Rock" 
    || playerSelection == "Scissors" && computerSelection == "Paper"){
        return "You won this round!"
    } else if (playerSelection == "Scissors" && computerSelection == "Rock"
    || playerSelection == "Rock" && computerSelection == "Paper" 
    || playerSelection == "Papper" && computerSelection == "Scissors"){
        return "You lose this one..."
    } else {
        return "Something went wrong"
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        playerChoice = prompt("Please, make your choice: (Rock, Paper or Scissors) ")
        console.log(`Result: ${playRound(checkPlayerChoice(playerChoice), getComputerChoice())}`)
    }
}

game()
