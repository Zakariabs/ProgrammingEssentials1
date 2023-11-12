// Begin van boilerplate dat je even mag vergeten
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van boilerplate dat je even mag vergeten


// generate a list with neagtive and positive numbers

list = [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15]
var min =  async function(list){
    list.sort()
    return list[0];
}

var max = function(list){
    list.sort()    
    return list[0];
}

process.exit();