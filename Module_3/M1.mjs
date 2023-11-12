// Begin van boilerplate dat je even mag vergeten
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van boilerplate dat je even mag vergeten
// code

let inputNumber;
let total = 0;
do{
    inputNumber = await userInput.question("Enter a number: ");
    total += parseInt(inputNumber);
}while (parseInt(inputNumber) > 0); 
console.log(total);
process.exit();