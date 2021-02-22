function stringToInteger(string) {
  const ZERO_OFFSET = '0'.charCodeAt();

  return string.split('').reverse().reduce( (acc, char, index) => {
    return acc + (char.charCodeAt() - ZERO_OFFSET) * 10**index;    
  }, 0);
}

function stringToSignedInteger(string) {
  let theInteger = stringToInteger(string.replace(/^[+-]/, ''));
  return string[0] === '-' ? -theInteger : theInteger;
}

function hexToInteger(string) {
  const HEX_TO_DECIMAL = {
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
    A: 10, B: 11, C: 12, D: 13, E: 14, F: 15,
  }

  return string.split('').reverse().reduce( (acc, char, index) => {
    return acc + HEX_TO_DECIMAL[char.toUpperCase()] * 16**index;
  }, 0);
}

function integerToString(int) {
  const INT_TO_STRING = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let digits = '';

  do {
    digits = INT_TO_STRING[int % 10] + digits;
    int = Math.floor(int / 10);
  } while (int > 0) 

  return digits;
}

function signedIntegerToString(int) {
  // const SIGNS = {'+': 1, '-': -1, '': 0};
  // const sign = Object.keys(SIGNS).find((key) => SIGNS[key] === Math.sign(int));
  let sign = ['-', '', '+'][Math.sign(int) + 1];

  return sign + integerToString(Math.abs(int));
}

// console.log(stringToInteger("4321")); // === 4321); // logs true
// console.log(stringToInteger("570")); // === 570); // logs true
// console.log(hexToInteger('4D9f'));

// console.log(stringToSignedInteger("4321"));// === 4321); // logs true
// console.log(stringToSignedInteger("-570"));// === -570); // logs true
// console.log(stringToSignedInteger("+100"));// === 100); // logs true

// console.log(integerToString(4321));      // "4321"
// console.log(integerToString(0));         // "0"
// console.log(integerToString(5000));      // "5000"
// console.log(integerToString(1234567890));

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");


