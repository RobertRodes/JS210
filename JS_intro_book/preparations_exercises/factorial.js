function factorial(number) {
  if (number === 0) return 1;
  let currentFactorial = 1;
  for(let i = 0; i < number; i++) {
    currentFactorial *= (i + 1);
  }
  return currentFactorial;
}

function factorial2(number) {
  if (number === 0) return 1;
  if (number === 1) return number;
  factorial2(number * (number - 1));
}

let rlSync = require('readline-sync');
let number = parseInt(rlSync.question('Enter a number: '));

console.log(factorial2(number));
