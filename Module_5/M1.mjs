import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';

const userInput = readline.createInterface({input, output});
// Einde van boilerplate dat je even mag vergeten


let number = parseInt( await userInput.question('Geef een getal in '));


for (let index = 1; index <= number; index++) {

    
    
    console.log(String(index).repeat(index));
    
}

process.exit();