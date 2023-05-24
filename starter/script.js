'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 2; */
const new_number = function () {
  return Math.floor(Math.random() * 20) + 1;
};

let secretNumber = new_number();
let score = 20;
let highscore = 0;

const winning = function () {
  document.querySelector('.message').textContent = '🎉 Correct Number';
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
};

const reset_game = function () {
  secretNumber = new_number();
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess === secretNumber) {
    winning();
  } else if (guess !== secretNumber) {
    if (score === 0) {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    } else {
      score--;
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  reset_game();
});
