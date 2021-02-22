function leadingSubstrings__(string) {
  return [...string].map( (_, idx, arr) => {
    return arr.slice(0, idx + 1).join('');
  });
}

function leadingSubstrings_(string) {
  return [...string].map( (_, idx, arr) => {
    return arr.slice(0, idx + 1).reduce( (str, char) => str + char );
  });
}

function leadingSubstrings(string) {
  let result = [];
  for(let idx = 1; idx <= string.length; idx++) {
    result.push(string.substring(0, idx));
  }

  return result;
}

function substrings(string) {
  let result = [];
  for(let idx = 0; idx < string.length; idx++) {
    result.push(leadingSubstrings(string.substring(idx)));
  }

  return result.flat();
}

function isPalindrome(string) {
  return string === [...string].reverse().join('');
}

function palindromes_(string) {
  let result = [];
  for(let i = 0; i < string.length - 1; i++) {
    for(let j = i + 2; j <= string.length; j++) {
      let theString = string.slice(i, j);
      if (isPalindrome(theString)) {
        result.push(theString);
      }
    }
  }

  return result;
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

console.log(palindromes('hello-madam-did-madam-goodbye'));

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));

console.log(substrings('abcde'));