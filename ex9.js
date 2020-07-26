'use strict'

const isPrime = require('is-prime-number');
let readlinesync = require('readline-sync');

let str = '';

console.log('***Prime numbers printer***');

let numPrime = readlinesync.questionInt('Please enter a positive number: ');

while ( numPrime <=1 ) {
  numPrime = readlinesync.questionInt('Please enter a POSITIVE number,\
                                       larger than 1: ');
}

//checks if input is prime
for ( let i = 1; i <= numPrime; i++) {
  if (isPrime(i) === true){
      str += i + ', ';

 }
}

//remove 2 last chars
str = str.slice(0, -2); 
console.log(str);