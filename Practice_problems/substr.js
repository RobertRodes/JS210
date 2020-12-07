function substr(string, start, length) {
  // if (length === 0) return '';
  if (start < 0) start = string.length + start;

  let sub = '';
  for (let i = start; i < start + length; i++) {
    if (string[i] === undefined) break;
    sub += string[i];
  }

  return sub;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0)); 