function evenOrOdd(number) {
  parsedNumber = parseInt(Number(number));
  if (isNaN(parsedNumber)) return 'not a number';
  if (parsedNumber !== Number(number)) return 'not an integer';
  return number % 2 === 1 ? 'odd' : 'even';
}

let rlSync = require('readline-sync');
let number = rlSync.question('Enter a number: ');

console.log(`The number ${number} is ${evenOrOdd(number)}.`);
