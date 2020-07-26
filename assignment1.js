'use strict'

let readlinesync = require('readline-sync');
let quizdb = [
    {
     question: 'What\'s your favorite drink?',
     ans: [{answer: 'Beer', score: 1},
           {answer: 'Squishie', score: 5},
           {answer: 'Lemonade', score: 2},
           {answer: 'Ribena', score: 4},
           {answer: 'Coke', score: 3}
    ] 
    },
    {
     question: 'What do you wear?',
     ans: [{answer: 'Red dress', score: 4},
           {answer: 'Green dress', score: 2},
           {answer: 'Sweatshirt and sweatpants', score: 5},
           {answer: 'Red shirt and blue pants', score: 3},
           {answer: 'White shirt and pants', score: 1}
        ]
    },
    {
     question: 'Who\'s your best friend?',
     ans: [{answer: 'Local boy', score: 3},
           {answer: 'Local bartender', score: 1},
           {answer: 'Local girl', score: 4},
           {answer: 'Room mates', score: 5},
           {answer: 'Neighbors', score: 2}
    ] 
    },
    {
     question: 'Who\'s your enemy?',
     ans: [{answer: 'bullies', score: 3},
           {answer: 'Father\'s boss', score: 4},
           {answer: 'Neighbor', score: 1},
           {answer: 'Local bartender', score: 2},
           {answer: 'Hooligans', score: 5}
    ]
    },
   {
    question: 'Where do you work?',
     ans: [{answer: 'With a mafia', score: 3},
           {answer: 'Nuclear plant', score: 1},
           {answer: 'School newspaper', score: 4},
           {answer: 'Retired', score: 5},
           {answer: 'Home', score: 2}
     ] 
     },
   {
    question: 'Your favorite vehicle?',
     ans: [{answer: 'Station wagon', score: 2},
           {answer: 'Sedan', score: 1},
           {answer: 'Motor chair', score: 5},
           {answer: 'Sports car', score: 3},
           {answer: 'Electric car', score: 4}
        ] 
    },
    {
     question: 'Your favorite food',
     ans: [{answer: 'Not meat', score: 4},
           {answer: 'Jello', score: 5},
           {answer: 'Anything', score: 1},
           {answer: 'Candy', score: 3},
           {answer: 'Nutrition', score: 2}
        ]
    },
    {
     question: 'Your favorite household item?',
     ans: [{answer: 'Book', score: 4},
           {answer: 'Teeth', score: 5},
           {answer: 'Skateboard', score: 3},
           {answer: 'Vacuum', score: 2},
           {answer: 'Remote', score: 1}
        ] 
    },
    {
     question: 'Most embarrassing moment?',
     ans: [{answer: 'Contract school', score: 4},
           {answer: 'Mr. Burns takes my woman', score: 5},
           {answer: 'Can\'t pick one', score: 2},
           {answer: 'Getting drunk', score: 1},
           {answer: 'Stand up for my sister', score: 3}
        ] 
    },
    {
     question: 'What\'s your IQ?',
     ans: [{answer: 'Below 25', score: 1},
           {answer: '100 and above', score: 4},
           {answer: '75-100', score: 3},
           {answer: '25-50', score: 2},
           {answer: '50-75', score: 5}
        ] 
    }
];

function shuffleQnA(arrObj, count) {
    let index = count;
    let rnd, tmp1;
  
    while (index) {
      rnd = Math.floor(Math.random() * index);
      index -= 1;
      tmp1 = arrObj[index];
      arrObj[index] = arrObj[rnd];
      arrObj[rnd] = tmp1;
    }
  }

//shuffle the answers
for(let x = 0 ; x<=9 ; x++ ){
    shuffleQnA(quizdb[x].ans, 5);
}

//shuffle the questions
shuffleQnA(quizdb, 10); //next ver. will be with arr length instaed of number

let score = 0; 

for (let i = 0; i <= 9; i++){
  console.log('~~~~~~~~ The Simpsons Quiz ~~~~~~~~ \n ~~~~~ Which character are you? ~~~~~');
  let prompt = readlinesync.keyInSelect([quizdb[i].ans[0].answer, quizdb[i].ans[1].answer,quizdb[i].ans[2].answer,
                                         quizdb[i].ans[3].answer, quizdb[i].ans[4].answer], quizdb[i].question, {cancel: 'Be like Gil Gunderson and quit...'});
  score += quizdb[i].ans[prompt].score;
  console.clear(); //keep the terminal clean to avoid confusion
}

console.log('Your score is: ', score, '\n ~~~~~ Your character is... ~~~~');

switch (true) {
    case (score < 11):
        console.log('Hi Homer, It\'s 11am and you\'er already with Duff beer... \n Maybe you\'ll succeed more next time... If you take it sober');
        break;
    case (score < 21):
        console.log('You missed a spot over there Marge... \n You need to take more seriously the house chores. \n See how the Flanders do\'in');
        break;
    case (score < 31):
        console.log('Ay Caramba! You sure did well if you\'re the Bartman. \n Look behind it\'s SideShow Bob, AHA!!!!!!');
        break;
    case (score < 41):
        console.log('Nice to meet you my twin Lisa \n I knew you are smart in the moment you started the quiz... \n I hope this quiz is recyclable.');
        break;
    case (score < 51):
        console.log('Hello Abe, Ahh, if that so then I\'m Santa? \n Oh, now I\'ll never die!.');
    default:
        break;
}

