'use strict'

let readlinesync = require('readline-sync');
let figlet = require('figlet');
let wordList = ['Bolt', 'Monster Inc.', 'Finding Nemo', 'Valient', 'BarnYard','Toy Story', 'Lion King', 'The Lego Movie', 'Ratatouille', 'Baby Boss', 'Six Heroes'];

console.log(figlet.textSync('HangMan', {
    font: 'Larry 3D',
    horizontalLayout: 'Defaulte',
    verticalLayout: 'Defaulte',
    width: 80,
    whitespaceBreak: true
}));

let wordPicker = wordList[Math.floor(Math.random() * wordList.length)];  //select word
const astrChng = /[A-Z]/gim;
let wordAstrix = wordPicker.replace(astrChng, '*'); //replace to *
let strikes = 10;
let tempGuess;

do {
    console.log(wordAstrix);
    let charGuess = readlinesync.keyIn('You have ' + strikes + ' more gusessing,\nPlease type letter that you want to guess: ', {limit: '$<A-Z>'});
    let tempArr = letterReplace(charGuess, wordPicker, wordAstrix);
    wordAstrix = tempArr[0];
    let strikesReturn = tempArr[1];
    if (strikesReturn === false){
        strikes--;
        }

// if (wordAstrix.toLowerCase() === wordPicker.toLowerCase()){
//     console.log('Your gueesing was right. The word was ' + wordPicker);
//     break;
//     }
        
tempGuess = readlinesync.question('You can guess the word or press enter to countinue: ');

if (tempGuess.toLowerCase() === wordPicker.toLowerCase()){
    console.log('Your gueesing was right. The word was ' + wordPicker);
    break;
} else {
    console.log('Wrong guessing');
}
} while (strikes >= 1);

if (strikes <= 0){
    console.log('Sorry, you out of turns. The word was ' + wordPicker);
}


// function replace astrix with gussed letter
function letterReplace(charGuess, wordPicker, wordAstrix){
    let counter = false;
    let tempChar = '';

    //function to replace char and return a new string
    String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }

    for (let i = 0; i <= (wordPicker.length); i++ ){
        tempChar = wordPicker.charAt(i);

        if (charGuess == tempChar.toLowerCase()){
            charGuess = wordPicker.charAt(i);
            wordAstrix = wordAstrix.replaceAt(i,charGuess);
            counter = true;
        }
    }

    let returnTempArr = [wordAstrix, counter];
    console.log(wordAstrix);
    return returnTempArr;
  }

