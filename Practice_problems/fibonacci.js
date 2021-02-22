function fib(num) {
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function fib(num) {
  let [a, b] = [0, 1];

  for (let i = 1; i < num; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}


function fibonaci(num, memo = {}) {
  if (memo[num]) return memo[num];
  if (num <= 2) return 1;
  memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  return memo[num];
}

const fibonacci = (() => {
  const memo = {};

  return (num) => {
    if (memo[num]) return memo[num];
    if (num <= 2) return 1;
    memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return memo[num];
  }
})();


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
