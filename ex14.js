'use strict'

let numRange = 100;
let arrRange = 5;
let printArr = [];

console.log(''); //for graphical ocd purpose... :)

for (let i = 0; i < arrRange; i++){
    printArr[i] = Math.floor((Math.random() * numRange));
    console.log(printArr[i] + '\n');
}