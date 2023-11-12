import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });
let choice = parseInt(await userInput.question('Maak een keuze \n 1] startTop \n 2] startLeft \n 3] StartReverse'));
let number = parseInt(await userInput.question('Geef een getal in '));

function main() {
    

    switch (choice) {
        case 1:
            normal();
            break;
        case 2:
            startLeft();
            break;
        default:
            reverse();
            break;
    }

}

// Call the main function to start the program.
main();

function normal() {

    for (let index = 1; index <= number; index++) {
        console.log(String(index).repeat(index));
    }
}

function reverse() {
    for (let index = number; index >= 1; index--) {
        console.log(String(index).repeat(index));
    }
}

function startLeft() {
    for (let index = 1; index <= number; index++) {
        console.log(String(index).repeat(index).padStart(2, " "));
    }
}
process.exit();