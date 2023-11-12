import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';

const userInput = readline.createInterface({input, output});

while (true) {

    let array = [];

    for (let i = 0; i < 5; i++) {
        
        let getal = await userInput.question('Geef een getal: ')
        array.push(getal)
    }

    for (let i = 0; i < array.length; i++) {
    
        
        array.sort(function(a, b){return a-b});
        console.log(array[i])

    

    }

    
    process.exit();
}


