'use strict'

let str = '';

    for (let i = 1; i <= 100; i++) {
        if ((i%2) == 1) {
            str += i + ', ';
        }  
    }

str = str.slice(0, -2); //remove 2 last chars
console.log(str);