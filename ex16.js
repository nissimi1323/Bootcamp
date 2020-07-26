'use strict'

let readlinesync = require('readline-sync');

let numRange = 50;
let arrRange = 0;
let min = numRange; //verify that there will be smaller number
let max = 1; //verfiy that there will be largar number
let minIndex = 0;
let maxIndex = 0;
let printArr = [];

arrRange = readlinesync.questionInt('Please enter array size: ');

while (arrRange <= 0) {
    arrRange = readlinesync.questionInt('Please enter positive array size (larger than 0): ');
}

for (let i = 0; i < arrRange; i++){
    printArr[i] = Math.floor((Math.random() * numRange) + 1);

    if (min > printArr[i]){
        min = printArr[i];
        minIndex = i;
    } else if (max < printArr[i]) {
        max = printArr[i];
        maxIndex = i;
    }
}

console.log('\nmin is: ' + min + ', placed in array index #' + minIndex + '\n\n'+ 'max is: ' + max + ', placed in array index #' + maxIndex+ '\n');