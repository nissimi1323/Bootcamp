'use strict'

let readlinesync = require('readline-sync');
let playerOne = '';
console.log('\u2664 \u2661 \u2667 \u2662 Welcome to War \u2662 \u2667 \u2661 \u2664');
let numOfPlayers = readlinesync.keyInSelect(['One Vs. Pc', 'Two of a kind playing each other'], 'Who\'s playing?', {cancel: 'Still a minor, Need to exit'});

switch (numOfPlayers) {  //run the proper game function
    case 0:
        console.clear(); //keep the terminal clean to avoid confusion
        console.log('\u2664 \u2661 \u2667 \u2662 Welcome to War \u2662 \u2667 \u2661 \u2664');
        playerOne = readlinesync.question('Please enter your name: ');
        console.clear();
        oneVsPc(playerOne);
        break;
    case 1:
        console.clear(); //keep the terminal clean to avoid confusion
        console.log('\u2664 \u2661 \u2667 \u2662 Welcome to War \u2662 \u2667 \u2661 \u2664');
        playerOne = readlinesync.question('Player one, please enter your name: ');
        let playerTwo = readlinesync.question('Player two, please enter your name: ');
        console.clear(); //keep the terminal clean to avoid confusion
        oneVsTwo(playerOne, playerTwo);
        break;
    default:
        break;
}

//main function run one player game
function oneVsPc(playerOne) {
    let betCashir = 50;
    let currentBet = 0;
    let tempKey; //input of index seconderyMenu
    const seconderyMenu = ['Until bet will do us part'];

    GameOn: //label
    do {
        console.clear();
        console.log('\u2664 \u2661 \u2667 \u2662 Welcome to War \u2662 \u2667 \u2661 \u2664');
        currentBet = readlinesync.questionInt(playerOne + ', Please place your bet between 1 - ' + betCashir + ' : ');
        if ((currentBet < 0) || (currentBet > betCashir)){
            throw 'I said place a bet between 1 - ' + betCashir + ' you typed ' + currentBet + '!! \n I Don\'t play with dumbass!!! Bye'
        } else {
            currentBet = cardsAssignOneP(currentBet);
        }
    
        betCashir += currentBet;

        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }
           
          async function waitAwhile() {
           await delay(5000);
           await waitAwhile();
        }

        if (betCashir === 0) {
            console.log('You are broke, Bye Bye...');
            return;
        } else {
            tempKey = readlinesync.keyInSelect(seconderyMenu, 'Do you wanna keep playing?', {cancel:'I want to leave with my money'});
            switch (tempKey) {
                case 0:
                    continue GameOn;
                    break;
            
                default:
                    console.log('It was nice to play with you ' + playerOne + ', hope to see you soon \n');
                    return;
                    break;
            }
        }
    } 
    while (true);
}

//function for one player to deal cards and return bet
function cardsAssignOneP(money) {
    const suit = ['\u2661', '\u2664', '\u2667', '\u2662'];
    const reactionWin = ['Nice, You won', 'What a luck', 'The delear loves you', 'I\'ll you beat next time'];
    const reactionLose = ['Bo Ho Ho, you lose', 'I\'m on fire', 'Better luck next time.. Or not', 'The house never loses...'];
    let playerOne = Math.floor(Math.random()*12 +1);
    let pc = Math.floor(Math.random()*12 +1);

    console.log ('Your card is ' + playerOne + suit[Math.floor(Math.random()* 4)] + ' And my card is ' + pc + suit[Math.floor(Math.random()* 4)]);
    if (playerOne > pc) {
        console.log(reactionWin[Math.floor(Math.random()* 4)] + '\n');
        return money;
    } else if (playerOne < pc) {
        console.log(reactionLose[Math.floor(Math.random()* 4)] + '\n');
        return (money*-1);
    } else {
        console.log('It\'s a draw, rematch');
        return (money = 0);
    }

}

//main function for two players, recives name, bets and calculate 
function oneVsTwo(playerOne, playerTwo) {
    let betCashirOne = 50;
    let betCashirTwo = 50;
    let currentBetOne = 0;
    let currentBetTwo = 0;
    let tempArr = [0,0];
    let tempKey;
    const seconderyMenu = [(playerOne + ', You can leave with your money'), (playerTwo + ', You can leave with your money'), 'until bet will do us part'];
    

    GameOn: //label
    do {
        console.clear();
        console.log('\u2664 \u2661 \u2667 \u2662 Welcome to War \u2662 \u2667 \u2661 \u2664');
        currentBetOne = readlinesync.questionInt(playerOne + ', Please place your bet between 1 - ' + betCashirOne + ' : ');
        if ((currentBetOne < 0) || (currentBetOne > betCashirOne)){
            throw playerOne + ' ,I said place a bet between 1 - ' + betCashirOne + ' you typed ' + currentBetOne + '!! \n I Don\'t play with dumbass!!! Bye'
        } else {
            currentBetTwo = readlinesync.questionInt(playerTwo + ', Please place your bet between 1 - ' + betCashirTwo + ' : ');
            if ((currentBetTwo < 0) || (currentBetTwo > betCashirTwo)){
                throw playerOne + ' ,I said place a bet between 1 - ' + betCashirOne + ' you typed ' + currentBetOne + '!! \n I Don\'t play with dumbass!!! Bye'
            } else {
                tempArr = cardsAssignTwoP(playerOne, currentBetOne, playerTwo, currentBetTwo);
                currentBetOne = tempArr[0];
                currentBetTwo = tempArr[1];
            }
        }

        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }
           
          async function waitAwhile() {
           await delay(5000);
           await waitAwhile();
        }
    
        betCashirOne += currentBetOne;
        betCashirTwo += currentBetTwo;

        if (betCashirOne === 0) {
            console.log(playerOne + ', you are broke, Bye Bye...');
            return;
        } else if (betCashirTwo === 0) {
            console.log(playerTwo + ', you are broke, Bye Bye...');
        } else {
            tempKey = readlinesync.keyInSelect(seconderyMenu, 'Do you wanna keep playing?', {cancel: 'Exit all'});
            switch (tempKey) {
                case 0:
                    console.log(playerOne + ' decided to quit with ' + betCashirOne + '\n');
                    console.log(playerTwo + ' quit with ' + betCashirTwo + '\n');
                    return;
                    break;
                case 1:
                    console.log(playerTwo + ' decided to quit with ' + betCashirTwo + '\n');
                    console.log(playerOne + ' quit with ' + betCashirOne + '\n');
                    return;
                    break;
                case 2:
                    continue GameOn;
                    break;
                default:
                    console.log('Both of you choose to exit with the money.\n' + playerOne + ' with ' + betCashirOne + '\n' + playerTwo + ' with ' + betCashirTwo);
                    return;
                    break;
            }
        }
    } 
    while (true);
}

//function assign cards randomly for two players return bet amount
function cardsAssignTwoP(namePOne, moneyPOne , namePTwo, moneyPTwo) {
    const suit = ['\u2661', '\u2664', '\u2667', '\u2662'];
    const reactionWin = ['You won, nice one', 'what a luck', 'the delear loves you', 'watch out, he\'ll beat next time'];
    const reactionDraw = ['No winners here', 'What a draw', 'Draw, try another round... Or not', 'There are no winners in war...'];
    let playerOne = Math.floor(Math.random()*12 +1);
    let playerTwo = Math.floor(Math.random()*12 +1);

    console.log (namePOne + '\'s card is ' + playerOne + suit[Math.floor(Math.random()* 4)] + ' And ' + namePTwo + '\'s card is '
                  + playerTwo + suit[Math.floor(Math.random()* 4)]);
    if (playerOne > playerTwo) {
        console.log(namePOne + ', ' + reactionWin[Math.floor(Math.random()* 4)]);
        moneyPTwo = moneyPTwo * -1;
        return [moneyPOne , moneyPTwo];
    } else if (playerOne < playerTwo) {
        console.log(namePTwo + ', ' + reactionWin[Math.floor(Math.random()* 4)]);
        moneyPOne = moneyPOne * -1;
        return [moneyPOne, moneyPTwo];
    } else {
        console.log(reactionDraw[Math.floor(Math.random()* 4)]);
        moneyPOne = 0;
        moneyPTwo = 0;
        return [moneyPOne, moneyPTwo];
    }

}

