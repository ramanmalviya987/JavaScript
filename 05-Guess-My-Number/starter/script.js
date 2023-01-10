'use strict';

let screctNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
console.log(screctNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }

  // player is win.. means correct number
  else if (guess === screctNumber) {
    document.querySelector('.message').textContent = 'correct Number';
    document.querySelector('.number').textContent = screctNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score>highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore
    }
    
  }

  else if(guess !== screctNumber){
    if (score > 1) {
        document.querySelector('.message').textContent = guess>screctNumber? 'Too High': 'Too Low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lost the Game';
        document.querySelector('.score').textContent = '0';
      }
  }

//   // Number is too high
//   else if (guess > screctNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too High';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the Game';
//       document.querySelector('.score').textContent = '0';
//     }
//   }

//   //Number is too low
//   else if (guess < screctNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost The Game';
//       document.querySelector('.score').textContent = '0';
//     }
//   }
});

// reset the game

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score
screctNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  
  
  console.log(screctNumber);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});


// document.querySelector('.again').addEventListener('click', function () {
//     score = 20;
//     screctNumber = Math.trunc(Math.random() * 20) + 1;
  
//     document.querySelector('.message').textContent = 'Start guessing...';
//     // displayMessage('Start guessing...');
//     document.querySelector('.score').textContent = score; 
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').value = '';
  
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';
//   });
