let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age? '));
let years;

console.log(`You are ${age} years old.`);
for (let i = 0; i < 4; i++) {
  years = (i + 1) * 10;
  console.log(`In ${years} years, you will be ${years + age} years old.`);
}
