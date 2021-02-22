function findFibonacciDigitCount(index) {
  const PHI = (1 + Math.sqrt(5)) / 2;
  return Math.ceil(index * Math.log10(PHI) - Math.log10(5) / 2);
}

function findFibonacciIndexByLength(length) {
  if (length === 1) return 1;

  let theLength = 0;
  let result = length * (length < 10 ? 3 : 4.5);

  while (theLength < length) {
    result += 1;
    theLength = findFibonacciDigitCount(result);
  }

  return result;
}

function fib(n) {
  let sr5 = Math.sqrt(5);
  return Math.floor((1 / sr5) * (((1 + sr5) / 2)**n) - (((1 - sr5) / 2)**n)) ;
}

// console.log(fib(1474));
// console.log(fib(72));
console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
console.log(findFibonacciIndexByLength(40000));   // 191396
console.log(findFibonacciIndexByLength(1000000000)); // 4784969

// let x = Date.now();
// for (let i = 0; i < 100000; i++) {
//   findFibonacciIndexByLength(10000);
// }
// console.log(Date.now() - x);

// x = Date.now();
// for (let i = 0; i < 100000; i++) {
//   findFibonacciIndexByLength2(10000);
// }
// console.log(Date.now() - x);
