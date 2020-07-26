'use strict'

let readlinesync = require('readline-sync');

//function replace space with astrix
function spaceReplace(str){
  let strNew = str.replace(/ /g, "*");
  return strNew;
}

let strInput = readlinesync.question('Please write a sentence: ');
let astrixSen = spaceReplace(strInput);
console.log(astrixSen);

//********************************************************//
//same exercise with loop instead of string replace method//
//*******************************************************//

console.log('Another way with loop instead ')
function spaceReplaceLoop(str){
  let newString = '';
  let charPos = '';
        
  for(let i = 0; i < str.length; i++){
    if (str.charAt(i) === ' ') {
        charPos = '*';
        newString = newString + charPos;
    } else {
      charPos = str.charAt(i);
      newString = newString + charPos;
      }
    }
  return newString;
}

strInput = readlinesync.question('Please write a sentence: ');
astrixSen = spaceReplaceLoop(strInput);
console.log(astrixSen);