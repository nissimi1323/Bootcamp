'use strict'

let readlinesync = require('readline-sync');

let numRange = 50;
let arrRange = 0;
let min = numRange; //verify that there will be smaller number
let max = 1; //verfiy that there will be largar number
let printArr = [];

arrRange = readlinesync.questionInt('Please enter array size: ');

while (arrRange <= 0) {
    arrRange = readlinesync.questionInt('Please enter positive array size (larger than 0): ');
}

for (let i = 0; i < arrRange; i++){
    printArr[i] = Math.floor((Math.random() * numRange) + 1);

    if (min > printArr[i]){
        min = printArr[i];
    } else if (max < printArr[i]) {
        max = printArr[i];
    }
}

console.log('\nmin is: ' + min + '\n\n'+ 'max is: ' + max + '\n');