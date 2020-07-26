'use strict'

let readlinesync = require('readline-sync');


//function to capitalize RegExp
function serachToCapitalize(str){
	return str.toUpperCase();
}

const vowels = /[aeiouy]/gim; //regular expression with the vowels+y
let strInput = readlinesync.question('Please write a sentence to capitalize: ');
let capitalizeVowels = strInput.replace(vowels, serachToCapitalize);
console.log(capitalizeVowels);
