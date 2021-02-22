function rotateRightmostDigits(number, times) {
  let digits = String(number).split('');
  let moveNum = digits.splice(digits.length - times, 1);
  digits.push(moveNum);
  return Number(digits.join(''));
}

function maxRotation(number) {
  let rotatedNumber = number;
  for (let i = String(number).length; i > 1; i--){
    rotatedNumber = rotateRightmostDigits(rotatedNumber, i);
  }

  return rotatedNumber;
}

console.log(maxRotation(735291));
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917