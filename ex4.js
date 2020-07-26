'use strict'

let readlinesync = require('readline-sync');

//every function contains restaurants recommendations
function regRest(ver){  
    switch (ver){
        case 0:
            switch (Math.floor(Math.random() * 2)){
                case 0:
                    console.log('Benny the fisher man');
                    break;
                case 1:
                    console.log('The old man and the sea');
                    break;
            }
            
            break;

        case 1:
            switch (Math.floor(Math.random() * 2)){
                case 1:
                    console.log('Sami and Susu');
                    break;
                case 2:
                    console.log('Segev');
                    break;
            }
            break;

        case 2:
            switch (Math.floor(Math.random() * 2)){
                case 1:
                    console.log('Vegi garden');
                    break;
                case 2:
                    console.log('The saladbar');
                    break;
            }
            break;

        default:
            console.log('Wrong input');
            break;
 }
}

function kosherRest(ver){
    console.log('Kosher');
    
    switch (ver){
        case 0:
            switch (Math.floor(Math.random() * 2)){
                case 0:
                    console.log('Benny the fisherman');
                    break;
                case 1:
                    console.log('Armando');
                    break;
            }
            
            break;

        case 1:
            switch (Math.floor(Math.random() * 2)){
                case 0:
                    console.log('Burgerim Karlibach');
                    break;
                case 1:
                    console.log('Magic Burger');
                    break;
            }
            break;

        case 2:
            switch (Math.floor(Math.random() * 2)){
                case 0:
                    console.log('Jaffa Cafe');
                    break;
                case 1:
                    console.log('Bariba');
                    break;
            }
            break;
            
        default:
            console.log('Wrong input');
            break;
 }
}

function kosherLamadRest(ver){
    console.log('Kashrot Lemehadrin');
    
    switch (ver){
        case 0:
            switch (Math.floor(Math.random() * 2)){
                case 0:
                    console.log('Armando');
                    break;
                case 1:
                    console.log('The old man and the sea');
                    break;
            }
            
            break;

        case 1:
            switch (Math.floor(Math.random() * 2)){
                case 0:
                    console.log('Lentrecote');
                    break;
                case 1:
                    console.log('Reginna');
                    break;
            }
            break;

        case 2:
            switch (Math.floor(Math.random() * 2)){
                case 0:
                    console.log('SoupPizza');
                    break;
                case 1:
                    console.log('Birinbaoum Cafe');
                    break;
            }
            break;
            
        default:
            console.log('Wrong input');
            break;
 }
}
let koshrotLemaehadrin = false;
let kosherQuest = false;


console.log('Hello and welcome to restaurant guide in Tel Aviv area');
const diners = readlinesync.questionInt('How many people are you going with?', {limit: '$<0-9>'} );
kosherQuest = readlinesync.keyInYN('Should it be Kosher?'); //can use keyInYNStrict to avoid other input

if (typeof kosherQuest !== 'boolean'){
    throw 'stop execution';
} else {
    if (kosherQuest === true){
    koshrotLemaehadrin = readlinesync.keyInYN('Should it be Kashrut Lemehadrin?');
      if (typeof kosherQuest !== 'boolean'){
          throw 'stop execution';
    }
  }
}

let foodVer = ['Fish', 'Burger Bar', 'Vegi'];
let menuIndex = readlinesync.keyInSelect(foodVer, 'What kind of food do you want?');
//checks which function should run
if (kosherQuest === false){
    regRest(menuIndex);
} else {
    if (koshrotLemaehadrin === true){
        kosherLamadRest(menuIndex);
    } else {
        kosherRest(menuIndex);
    }
}