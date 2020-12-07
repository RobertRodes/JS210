function repeat(str, count) {
  count = parseInt(count);
  if (isNaN(count) || count < 0) return undefined;
  if (count === 0) return '';

  let repeatedString = '';
  for (i = 0; i < count; i++) {
    repeatedString += str;
  }

  return repeatedString;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 4));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined