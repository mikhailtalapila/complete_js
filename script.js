'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = ' 🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 21;
//
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//document.querySelector('.check').addEventListener('click', function () {
//  const guess = Number(document.querySelector('.guess').value);
//  if (!guess) {
//    document.querySelector('.message').textContent = 'No number';
//  }
//});
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number entered';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too high';
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too low';
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
