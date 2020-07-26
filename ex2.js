'use strict';

let readline = require('readline-sync');

function mycalc1(num1, num2) {

let sum = num1 + num2;
//console.log(num1, num2, sum);
if (sum == 10) {
    console.log('makes 10');
}

else {
    console.log('nope');
}

}
//let dice = readline.keyIn('Roll the dice, What will the result be? ', {limit: '$<1-6>'});
//console.log(dice);

let num1 = readline.questionInt('please insert number:');
let num2 = readline.questionInt('please insert another number:');
mycalc1(num1,num2);
