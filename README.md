# Rock Paper Scissors
Project made by with the support of [The Odin Project in the foundations course](https://www.theodinproject.com/paths/foundations/courses/foundations)

## Assignment
- Start a new Git repo for your project.
Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file).

- Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

- Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock". 

- Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

- Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.