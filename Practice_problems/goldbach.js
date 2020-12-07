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

function checkGoldbach(num) {
  if (num < 4 || num % 2 === 1) {
    console.log(null);
    return;
  }

  // Allows incrementing by even numbers in the for loop
  if (num === 4) { 
    console.log(2, 2);
    return;
  }

  for (let i = 3; i < num / 2; i += 2) {
    if (isPrime(i) && isPrime(num - i)) {
      console.log(i, num - i);
    }
  }
}

checkGoldbach(4);
