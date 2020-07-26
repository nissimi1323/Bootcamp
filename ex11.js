'use strict'

let readlineSync = require('readline-sync');

let strInput = readlineSync.question('Please write a sentence: ');
let palindrome = checkPalindrome(strInput);

//checks if it's palindrom
function checkPalindrome(strCheck){
    let leng = Math.trunc(strCheck.length / 2) - 1;
    let check = false;
    let charNum = strCheck.length - 1;
    
    for(let i = 0; i <= leng; i++){
        if ((strCheck.charAt(i)) === (strCheck.charAt(charNum - i))) {
            check = true;
        } else {
            return (check = false);
        }
    }
    return check;
}

if (palindrome === true){
  console.log('It\'s a Palindrome');
  } else {
      console.log('It\'s not a Palindrome');
  }