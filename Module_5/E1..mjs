import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';


const userInput = readline.createInterface({input, output});

let zijde1 = userInput.question('Wat is de lengte? ')
let zijde2 = await userInput.question('Wat is je breedte? ')

let Berekening = zijde1 * zijde2;

console.log("De oppervlakte van de rechthoek is " + Berekening);




process.exit();