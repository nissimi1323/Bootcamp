'use strict'

let readlinesync = require('readline-sync');

//function replace numberss and symbols with space
function spaceReplace(str){
    const numChar = /[^ \D]/gi; //regular expression for numbers
    const symChar = /[^ \w]/gi; //regular expression for symbols
    let strNew = str.replace(numChar, '');
    strNew = strNew.replace(symChar, '');
    return strNew;
}

//function return the longest word
function longestWord(str) {
    let arrSplit = str.split(' ');
    let longestWord = '';
    let temp = 0;
    
    // checks for the longest word
    for (let i = 0; i < arrSplit.length; i++){
      if (arrSplit[i].length > temp){
      temp = arrSplit[i].length;
      longestWord = arrSplit[i];
       }
    }

    //checks if there are more long words with same length
    for (let i = 0; i < arrSplit.length; i++){
      if (arrSplit[i].length == temp){
        if (longestWord !== arrSplit[i]){
           longestWord += ' ' + arrSplit[i];
        }
      }
  } 

  return longestWord;
}

let strInput = readlinesync.question('Please write a sentence: ');
let newSen = spaceReplace(strInput);
newSen = longestWord(newSen); 
console.log(newSen);