function fibonacciDigitCount(fibIndex) {
  if (fibIndex === 1) return 1;
  // Golden ratio
  const PHI = (1 + Math.sqrt(5)) / 2;
  // Binet's formula
  return Math.ceil((fibIndex * Math.log10(PHI)) - (Math.log10(5) / 2));
}

function findFibonacciIndexByLength(digits) {
  let fibIndex = 1;

  while (fibonacciDigitCount(fibIndex) < digits) {
    fibIndex += 1;
  }

  return fibIndex;
}

console.log(findFibonacciIndexByLength(1000000)); // 476

