let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_p = document.getElementById('r');
const paper_p = document.getElementById('p');
const scissors_p = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function convert(letter) {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  return 'Scissors';
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convert(userChoice)} beats ${convert(
    computerChoice
  )}. You Win! 🔥`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove('green-glow');
  }, 300);
}
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convert(userChoice)} loses to ${convert(
    computerChoice
  )}. You Lose! 🤦‍`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove('red-glow');
  }, 300);
}
function draw(userChoice, computerChoice) {
  result_div.innerHTML = `${convert(userChoice)} equals ${convert(
    computerChoice
  )}. It's a Draw! 💩`;
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove('gray-glow');
  }, 300);
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_p.addEventListener('click', function() {
    game('r');
  });
  paper_p.addEventListener('click', function() {
    game('p');
  });
  scissors_p.addEventListener('click', function() {
    game('s');
  });
}

main();
