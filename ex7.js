'use strict'

let readlinesync = require('readline-sync');

let numFact = readlinesync.questionInt('Please enter positive number: ');
let fact = 1;

if (numFact === 0){

    console.log('1');
// need to check how to use stop execution
}

else {
     while (numFact <= 0) {

    numFact = readlinesync.questionInt('Please enter positive number: ');
    }
}


for (let i = 1; i <= numFact; i++) {
    fact = i*fact;

}
    
console.log(fact);
