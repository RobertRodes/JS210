function range(num) {
  return Array(num).fill(0).map((_, i) => i + 1);
}

function sum(range) {
  return range.reduce((sum, n) => sum + n);
}

function squareSum(num) {
  return sum(range(num))**2;
}

function sumSquare(num) {
  return sum(range(num).map(n => n**2));
}

function __sumSquareDifference(num) {
  return squareSum(num) - sumSquare(num);
}

x = Date.now();
for (let i = 0; i < 10000000; i++) {
  sumSquareDifference(100);
}
console.log(Date.now() - x);

x = Date.now();
for (let i = 0; i < 10000000; i++) {
  _sumSquareDifference(100);
}
console.log(Date.now() - x);

// console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10));     // 2640
// console.log(sumSquareDifference(1));      // 0
// console.log(sumSquareDifference(100));    // 25164150

function sumSquareDifference(n) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let i = 1; i <= n; i += 1) {
    sum += i;
    sumOfSquares += i ** 2;
  }

  return sum ** 2 - sumOfSquares;
}

function _sumSquareDifference(n) {
  let sumNumbersSquare = ((n * (n + 1)) / 2)**2;
  let numbersSquaredSum = (n * (n + 1) * (2 * n + 1)) / 6;

  return sumNumbersSquare - numbersSquaredSum;
}

