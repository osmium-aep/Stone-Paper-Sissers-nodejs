const prompt = require("prompt-sync")();

const choice = ["stone", "paper", "scisser"];
let userChoice = [];
let computerChoice = [];

let rounds = prompt("How much rounds you wanna play>");
parseInt(rounds);

let loop = 0;
while (loop < rounds) {
  let computerRawInput = Math.floor(Math.random() * 3);
  let userRawInput = prompt(`--------------------\n--Enter--\nRound ${loop + 1}\nst = stone\npa = paper\nsc = scisser\n>`);

  if (computerRawInput === 0) {
    computerChoice.push(choice[0]);
  } else if (computerRawInput === 1) {
    computerChoice.push(choice[1]);
  } else if (computerRawInput === 2) {
    computerChoice.push(choice[2]);
  };

  if (userRawInput === "st") {
    userChoice.push(choice[0]);
  } else if (userRawInput === "pa") {
    userChoice.push(choice[1]);
  } else if (userRawInput === 'sc') {
    userChoice.push(choice[2]);
  } else {
    userChoice.push(null);
  };

  function playGame() {
    if (userChoice[loop] === computerChoice[loop]) {
      return `--------------------\nComputers Choice was: ${computerChoice[loop]}\nYour Choice was: ${userChoice[loop]}\nThe game was a tie`;
    } else if (userChoice[loop] === choice[0] && computerChoice[loop] === choice[2]) {
      return `--------------------\nComputers Choice was: ${computerChoice[loop]}\nYour Choice was: ${userChoice[loop]}\nYou won`
    } else if (userChoice[loop] === choice[1] && computerChoice[loop] === choice[0]) {
      return `--------------------\nComputers Choice was: ${computerChoice[loop]}\nYour Choice was: ${userChoice[loop]}\nYou won`
    } else if (userChoice[loop] === choice[2] && computerChoice[loop] === choice[1]) {
      return `--------------------\nComputers Choice was: ${computerChoice[loop]}\nYour Choice was: ${userChoice[loop]}\nYou won`
    } else {
      return `--------------------\nComputers Choice was: ${computerChoice[loop]}\nYour Choice was: ${userChoice[loop]}\nUnfortunatly You Lose`
    };
  };
  if (userChoice[loop] === null) {
    console.log(`--------------------\nAn error occurred `)
    break;
  }
  console.log(playGame())
  loop++
};