function isPrime(num) {
  if (num === 2) return true;
  if (num <= 1 || num % 2 === 0) return false;

  let numRoot = Math.sqrt(num)
  for (let i = 3; i <= numRoot; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}