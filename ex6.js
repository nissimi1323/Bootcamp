'use strict'

let readlinesync = require('readline-sync');
let num = readlinesync.questionInt('Please choose a number larger than 10: '); 

while (num <= 10) {
         num = readlinesync.questionInt('Please choose a number LARGER than 10: ');
    }

console.log('Thank you');
