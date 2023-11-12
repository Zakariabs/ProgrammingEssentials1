
// Begin van boilerplate dat je even mag vergeten
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});




let choices = ['rock', 'paper', 'scissors'];
let computerChoice = choices[Math.floor(Math.random()*choices.length)];

// We bekijken deze syntax in module 6, momenteel kan je gewoon copy/pasten
let userChoice = await userInput.question("Wat is your choice? ");




var dictionary = {};

dictionary["scissors"] = "paper"
dictionary["paper"] = "rock"
dictionary["rock"] = "scissors"


if (computerChoice != userChoice ) {
    
    dictionary[computerChoice];

}
else {

    console.log("Its a draw!")
}

console.log(dictionary[computerChoice]);



process.exit();