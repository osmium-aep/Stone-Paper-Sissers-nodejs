const prompt = require("prompt-sync")();

const choice = ["stone", "paper", "scisser"];
let userChoice = [];
let computerChoice = [];

let rounds = prompt("How much rounds you wanna play>");

let loop = 0;
for (i = 0; i < rounds; i++) {
  let computerRawInput = Math.floor(Math.random() * 3);
  let userRawInput = prompt("Enter st for stone, pa for paper and sc for sisser");

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
  }

  function playGame() {
    if (userChoice[loop] === computerChoice[loop]) {
      return `Computers Choice was: ${computerChoice[loop]} \n  Your Choice was: ${userChoice} \n The game was a tie`;
    } else if (userChoice[loop] === choice[0] && computerChoice[loop] === choice[2]) {
      return `Computers Choice was: ${computerChoice[loop]} \n Your Choice was: ${userChoice} \n You won`
    } else if (userChoice[loop] === choice[1] && computerChoice[loop] === choice[0]) {
      return `Computers Choice was: ${computerChoice[loop]} \n Your Choice was: ${userChoice} \n You won`
    } else if (userChoice[loop] === choice[2] && computerChoice[loop] === choice[1]) {
      return `Computers Choice was: ${computerChoice[loop]} \n Your Choice was: ${userChoice} \n You won`
    }else if(userChoice[loop] === null){
      return `Computers Choice was: ${computerChoice[loop]} \n  Your Choice was: ${userChoice} \n An Error ocured`
    }else {
      return `Computers Choice was: ${computerChoice[loop]} \n  Your Choice was: ${userChoice} \n Unfortunatly You Lose`
    }
  }
  console.log(playGame())
  loop++
}
console.log(userChoice);
console.log(computerChoice);