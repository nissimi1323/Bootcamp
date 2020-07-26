'use strict';

let readlineSync = require('readline-sync');

function convertNum(num){

    switch (num) {
        case 0:
            console.log('Zero');
            break;

        case 1:
            console.log('One');
            break;

        case 2:
            console.log('Two');
            break;

        case 3:
            console.log('Three');
            break;

        case 4:
            console.log('Four');
            break;
    
        case 5:
            console.log('Five');
            break;
    
        case 6:
            console.log('Six');
            break;
    
        case 7:
            console.log('Seven');
            break;
 
        case 8:
            console.log('Eight');
            break;
        
        case 9:
            console.log('Nine');
            break;
           
        default:
            console.log('Not in range');
            break;
    }
}

let picknum = readlineSync.questionInt('Please enter a number between 0-9 '\
,{limit: '$<0-9>', limitMessage: 'Numbers only please'}); //endless loop if not number
//let picknum = readlineSync.keyIn('Please enter a number between 0-9 ' ,{limit: '$<0-9>'}); //limits key option, input string, need to change switch case to string '9'
convertNum(picknum);



