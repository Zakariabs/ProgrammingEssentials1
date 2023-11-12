// Begin van boilerplate dat je even mag vergeten
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van boilerplate dat je even mag vergeten




let start;
let end;
let deler1;
let deler2;


start = 1;
end = 100;
deler1 = 2;
deler2 = 4;


for (let i = start ; i <= end; i++) {
    
    
    if (i % deler1 === 0) {
        console.log("Deelbaar door: " + deler1);
    } else if (i % deler2 === 0) {
        console.log("Deelbaar door: " + deler2);
    } else if (i % deler1 === 0 && i % deler2 === 0) {
        console.log("Deelbaar door: " + deler1 + " en " + deler2);
    } else {
        // Handle the default case here if needed.
        console.log("Niet geldig")
    }
    
    
}


process.exit();