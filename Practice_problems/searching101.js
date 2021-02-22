function any(arr, op, val) {
  return new Function(
    `return [${arr}].some((el) => el ${op} ${val});`
  ).call();
}

const rlSync = require("readline-sync");

const ops = {
  '===': 'equals', 
  '!==': 'does not equal', 
  '<'  : 'is less than', 
  '<=' : 'is less than or equal to', 
  '>'  : 'is greater than', 
  '>=' : 'is greater than or equal to',
}

let numbers = [];
const msgNums = ['1st', '2nd', '3rd', '4th', '5th'];

for (let i = 0; i < msgNums.length; i++) {
  numbers.push(rlSync.question(`Enter the ${msgNums[i]} number: `));
}

let op;
while(true) {
  op = rlSync.question('Enter the comparison operator to use: ');
  if (!Object.keys(ops).includes(op)) {
    console.log(
      `Invalid operator. Valid operators are ${Object.keys(ops).join(', ')}.`
    );
    continue;
  }

  break;
}

let checkNum = rlSync.question('Enter the number to check: ')

const yesNo = any(numbers, op, checkNum) ? 'a' : 'no';

console.log(
  `There is ${yesNo} number in the set (${numbers.join(', ')}) that ${ops[op]} ${checkNum}.`
);




// console.log(any([1, 2, 3, 4], '===', 4));
// console.log(any([1, 2, 3, 4], '>', 4));
// console.log(compare(3, '<', 7).call());


// function compare(val1, op, val2) {
//   return new Function(
//     `return ${val1} ${op} ${val2};`
//   ).call();
// }

// const yesNo = numbers.includes(checkNum) ? '' : ' not';
// console.log(`The number ${checkNum} is${yesNo} in the set (${numbers.join(', ')}).`);
